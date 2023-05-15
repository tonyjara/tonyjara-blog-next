---
title: "Testing Postgres on NextJs api's with Jest and Typescript"
excerpt: "Testing in postgres with NextJs api's and Typescript can be hard, in this blog I show you how I do it."
coverImage: "/assets/birbs/avionsito.jpg"
birbName: "Cock-tailed Tyrant | Alectrurus tricolor"
birbLink: "https://ebird.org/species/cottyr1"
tags: ["Postgres", "Jest", "NextJs", "SQL"]
date: "Sat Jul 16 2022 14:37:22 GMT-0400 (Paraguay Standard Time)"
author:
  name: Tony Jara
  picture: "/assets/author/myface.jpeg"
ogImage:
  url: "/assets/birbs/avionsito.jpg"
---

If you're like me and want to be 100% sure on every request you send to your database, then you definitely need to test.

Testing in postgres can be somewhat annoying if you don't know what you're doing. Let me show you the way I do it.

## How does it work?

In order for our tests to be useful we need to be able to load all of our migrations and our configurations every time we start a test. This means we have to reset the db every time we run a test, and this could also affect our staging DB.

Luckily Postgres has a way to quickly create and get rid of DB's leveraging role names and schemas.

All you need to do is pre-configure a few things and you can re-use it for every query you do.

## Installations

### [Follow along with the repo if you wish.](https://github.com/tonyjara/tuto-pg-typescript-nextjs)

- Download and install [Postgres](https://www.postgresql.org/)
- Download [Pgadmin](https://www.pgadmin.org/download/) and create a DB called 'test'
- Create a NextJs project with the following libraries:

```javascript
yarn add node-pg-migrate pg pg-format jest bcryptjs lodash

yarn add -D @types/pg @types/pg-format @babel/plugin-transform-modules-commonjs node-mocks-http ts-jest ts-node @types/jest @types/bcryptjs @babel/runtime
```

- Create a .babelrc file on the root of your project and copy this:

```javascript
//This allows us to use imports on Jest
{
  "presets": ["next/babel"],
  "env": {
    "plugins": {
      "test": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}
```

## DB Config

Lets create a folder on the root called _dbConfig_, inside we'll create 3 files:

- The first one will be a .env.test file with the following code:

```js
NEXT_PUBLIC_PG_TEST_USER = YOUR_PG_USER;
```

- The second file is pool.ts , This file creates a connection with our db.

Copy the following code:

```ts
//You can later use this code to connect to your prod database.

import pg from "pg";

let pool = null as pg.Pool | null;

const host = process.env.PG_HOST;
const port = Number(process.env.PG_PORT);
const database = process.env.PG_DB_NAME;
const user = process.env.PG_USER;
const password = process.env.PG_PASS;

export const poolConfig: pg.PoolConfig = {
  host,
  port,
  database,
  user,
  password,
};

const myPool = {
  connect: async (options: pg.PoolConfig) => {
    pool = new pg.Pool(options);
    await pool.query("SELECT 1 + 1;");
    return;
  },
};

if (!pool) {
  myPool.connect(poolConfig);
}

export { myPool, pool };
```

- The third file is going to be db_context.

Copy the following code:

```javascript
import { randomBytes } from "crypto";
import { default as migrate } from "node-pg-migrate";
import { PoolConfig } from "pg";
import format from "pg-format";
import { myPool, pool } from "./pool";

//Don't forget to add your localhost user from PG to your .env.test
const test_user = process.env.NEXT_PUBLIC_PG_TEST_USER;

const root_config: PoolConfig = {
  host: "localhost",
  port: 5432,
  database: "test",
  user: test_user,
  password: "",
};

export const db_context = {
  roleName: () => {
    // Randomly generate a role name to connect to PG as
    return "a" + randomBytes(4).toString("hex");
  },
  build: async (roleName: string) => {
    // Connect to PG as usual
    await myPool.connect(root_config);

    // Create new role
    await pool?.query(
      format("CREATE ROLE %I WITH LOGIN PASSWORD %L", roleName, roleName)
    );

    // Create a schema with the same name
    await pool?.query(
      format("CREATE SCHEMA %I AUTHORIZATION %I", roleName, roleName)
    );
    // Disconnect entirely from PG
    await pool?.end();

    // Run migrations in new schema
    await migrate({
      schema: roleName,
      direction: "up",
      log: () => {},
      noLock: true,
      dir: "migrations",
      databaseUrl: {
        host: root_config.host,
        port: root_config.port,
        database: root_config.database,
        user: roleName,
        password: roleName,
      },
      //@ts-ignore
      migrationsTable: undefined,
    });

    // Connect to pg as newly created role

    await myPool.connect({
      host: root_config.host,
      port: root_config.port,
      database: root_config.database,
      user: roleName,
      password: roleName,
    });
    return;
  },
  reset: async () => {
    await pool?.query("DELETE FROM users;");
    return;
  },
  close: async (roleName: string) => {
    // Disconnect from pg
    await pool?.end();

    // Reconnect as our root user
    await myPool.connect(root_config);

    // Delete the role and schema we created
    await pool?.query(format("DROP SCHEMA %I CASCADE;", roleName));
    await pool?.query(format("DROP ROLE %I;", roleName));

    // Disconnect
    return await pool?.end();
  },
};
```

## SQL setup

Let's create a folder called SQL, inside that folder let's create a file called TABLES.sql with the following code:

```sql
CREATE TABLE IF NOT EXISTS users (
     id                   SERIAL PRIMARY KEY,
     email                VARCHAR(256) NOT NULL UNIQUE CHECK (LOWER(email) = email),
     role                 VARCHAR(24) NOT NULL,
     created_at           TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
     updated_at           TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
     password             VARCHAR(128) NOT NULL

);

CREATE TABLE IF NOT EXISTS user_profile (
      id                 SERIAL PRIMARY KEY,
      user_id             INTEGER REFERENCES users(id) ON DELETE CASCADE,
      bio                VARCHAR(512),
      display_name        VARCHAR(64) NOT NULL,
      gender             VARCHAR(32),
      phone              VARCHAR(64),
      profile_photo        VARCHAR(512)

);

```

On that same folder let's create another file called initial_db_structure.ts, this file is going to import the sql files and output them as strings so that we can easily feed them to PG.

Copy the following code inside, keep in mind that your folder structure may be different to the one here:

```javascript
import fs from "fs";
import path from "path";

const tablesPath = path.resolve(__dirname, "./TABLES.sql");

const tables = fs.readFileSync(tablesPath).toString();

export const initial_db_structure = tables;
```

## Migrations setup

For our migrations we're going to use node-pg-migrate to manage the creation and deletion of our tables.

create a script on your package.json:

```json
"migrate": "ts-node node_modules/.bin/node-pg-migrate -j ts",
```

Run the following command:

```bash
yarn migrate create initial
```

This is going to create a folder called migrations with a file inside.
Inside that file, replace it's contents with the following code:

```javascript
import { MigrationBuilder, ColumnDefinitions } from "node-pg-migrate";
import { initial_db_structure } from "../SQL/initial_db_structure";

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  return pgm.sql(initial_db_structure);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(`
  DROP TABLE users CASCADE;
  `);
}
```

That's all the setup! Now let's create one api so we can test it:

## Signup API

Inside the pages folder if you don't have it already, create a folder called api. Inside that folder let's create a file called user-signup with the following code:

```javascript
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { merge, snakeCase, mapKeys, camelCase } from 'lodash';
import { pool } from '../../dbConfig/pool';

const camelCaseObjectKeys = (object: any) => {
  return mapKeys(object, (value, key) => camelCase(key)) as any;
};

export default async function userSignup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = JSON.parse(req.body);

    const { email, password, displayName } = data;

    const hashedPass = await bcrypt.hash(password, 10);

    const user = {
      email,
      password: hashedPass,
      bio: '',
      displayName,
      gender: '',
      phone: '',
      profilePhoto: null,
      userId: 1,
    };

    const response = await pool?.query(
      'INSERT INTO users(email, role, password) VALUES($1, $2, $3 ) RETURNING *;',
      [user.email.toLowerCase(), 'USER', user.password]
    );

    if (response && 'rows' in response) {
      const userId = response.rows[0].id;
      const { bio, displayName, gender, phone, profilePhoto } = user;
      const profile = { bio, displayName, gender, phone, profilePhoto, userId };

      const snaked = Object.keys(profile)
        .map((x) => snakeCase(x))
        .toString();

      const makeProfile = await pool?.query(
        `INSERT INTO user_profile(${snaked}) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`,
        [bio, displayName, gender, phone, profilePhoto, userId]
      );

      if (makeProfile && 'rows' in makeProfile) {
        const returnedUser = camelCaseObjectKeys(
          merge(makeProfile.rows[0], response.rows[0])
        );
        if ('message' in returnedUser) {
          throw res.status(500).json({ message: returnedUser.message });
        }

        const filteredUser = {
          email: returnedUser.email,
          createdAt: returnedUser.createdAt,
          updatedAt: returnedUser.updatedAt,
          role: returnedUser.role,
          bio: returnedUser.bio,
          displayName: returnedUser.displayName,
        };

        return res.status(200).json({ user: filteredUser });
      }
    }

    return res.status(500).json({ message: 'unexpected' });
  } catch (e: any) {
    if ('message' in e) {
      return res.status(500).json({ message: e.message });
    }
    return res.status(500).json({ message: 'something went wrong' });
  }
}


```

## Tests

Finally! The last thing we need to do is create a folder called test, and inside that folder we'll create a file called signup-test.test.ts with the following code:

```javascript
import { createMocks } from "node-mocks-http";
import { db_context } from "../dbConfig/db_context";
import userSignup from "../pages/api/user-signup";

describe("tests auth functions", () => {
  // eslint-disable-next-line no-unused-vars
  let context;
  const roleName = db_context.roleName();

  beforeAll(async () => {
    context = await db_context.build(roleName);
  });

  beforeEach(async () => {
    await db_context.reset();
  });

  afterAll(async () => {
    await db_context.close(roleName);
  });

  it("tests user signup", async () => {
    const { req, res } = createMocks({
      method: "POST",
      //@ts-ignore
      body: JSON.stringify(mockSignupData),
    });

    await userSignup(req, res);

    const response = JSON.parse(res._getData());

    expect(Boolean(response.user.displayName)).toBe(true);
    expect(response.user.role === "USER").toBe(true);

    expect(res._getStatusCode()).toBe(200);
  });
});

let mockSignupData = {
  email: "test@test.com",
  displayName: "TEST USER",
  password: "asdfasdf",
  confirmPassword: "asdfasdf",
  reCaptchaToken: "asdf",
};
```

And now to run our test add the following script on your package.json:

```json
 "test": "jest --watch",
```

## Conclusions

Testing this way solves a lot of problems. The one caveat to this approach is that you will get a warning when running multiple tests. The only things you need to carry between tests are the beforeAll, afterAll and beforeEach functions.

Hope this was useful and if you wish just [clone the repo](https://github.com/tonyjara/tuto-pg-typescript-nextjs).

### If you want to contact me hit me up on <a href="https://twitter.com/nytoraja" target="_blank">Twitter</a>
