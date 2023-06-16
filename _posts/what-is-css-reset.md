---
title: "What is a CSS Reset file and why do we need it?"
excerpt: "A brief explanation with examples of what CSS reset files are and why it's a good idea to use them."
coverImage: "/assets/birbs/red-necked-tanager.jpg"
birbName: "Red Necked Tanager / Tangara Cyanocephala"
birbLink: "https://ebird.org/species/rentan1"
tags: ["personal"]
date: "03/06/2023"
author:
  name: Tony Jara
  picture: "/assets/author/myface.jpeg"
ogImage:
  url: "/assets/birbs/red-necked-tanager.jpg"
---

A Css reset file helps flatten inconsistencies across browsers. The default css configuration is not the same in all browsers and can make your UI vary from browser to browser, this can add up in undesirable ways.

The reason why we still have this issue and there's no standard when it comes to CSS defaults is because there are far too many websites that depend on this defaults and if they changed this, many of them would break. [There's an awesome podcast](https://open.spotify.com/episode/6SYD2Is8dLb73Hua8yKzQw?si=7cad25eb827b4f78) that talks about this if you're interested.

**It's not a bug, it's a feature!** 🐛

Here is a comparison of 4 web browsers without and with the css reset.

<img alt="Pic of 4 browsers showing css" src="/assets/css-reset/no-reset.png" />
<img alt="Pic of 4 browsers showing css" src="/assets/css-reset/with-reset.png" />

If you want a minimal css reset file, you can use this one:

```css
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

body {
  line-height: 1;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

nav ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

/* change colors to suit your needs */
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

/* change colors to suit your needs */
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* change border color to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}
```

If you want a really extensive one I would recommend [this one](https://gist.github.com/DavidWells/18e73022e723037a50d6). Don't forget to import it BEFORE anything else.

That's it, have an awesome day.
