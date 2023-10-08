---
title: Understanding what PATH is and why we need
excerpt: A short blog to understand what PATH is, what it's used for, and how to use it in Linux.
coverImage: /assets/birbs/gygis.jpeg
birbName: White Tern / Gigis alba
birbLink: https://ebird.org/species/whiter/L1004394
tags:
  - linux
  - shell
  - terminal
date: 07/10/2023
author:
  name: Tony Jara
  picture: /assets/author/myface.jpeg
ogImage:
  url: /assets/birbs/gygis.jpeg
---

Understanding path is essential for anyone learning Linux. In this blog we'll learn about what it is and why we need it.

### What is it?

Whenever we're executing commands in the shell like **ls** or even **cd** we're executing binaries that are usually located in the /user/bin directory. This may vary depending on your OS or shell, but what's important to understand is that whenever you write **ls** or **cd**, your shell is going to check in a list of possible places to try to find a match for that command. And that's precisely what the PATH is. PATH is a variable that holds a list of directories separated by semicolons, each of this directories is a possible place for the shell to look for executables.

### Why do we need this?

In a world where path did not exist we would be writing long commands on the shell to execute binaries. Sure, you might be able to alias them. But it's way simpler to just say that everything in a certain directory can be executable, such as the /usr/bin directory.
Also because of security, by default folders such as /usr/bin are protected and you can only write to them with super user permissions. You wouldn't want anyone you don't allow to be messing with your binaries.

### How can I add a PATH?

There are 2 ways of adding a path, a temporary one and a permanent one.

#### Temporary

In the bash scripting language, if you call an existing variable, you use the $ sign. So if you write on your shell **echo $PATH** you're going to see what your current path is.
If we were to type **PATH=~/other/path** on our shell, this would overwrite everything we have on our path. The correct way to add a new path is to reference the previous one first. Like this:

```bash
PATH=$PATH:~/other/path
```

You could keep adding directories just by adding more semicolons. This works great but if you close your terminal and re open it, this changes are going to be **gone**.

#### Permanent

Depending on what shell you're using there will be a file where you can add permanent paths. For **Zsh** this is the ~/.zshrc file and for **Bash** it's the ~/bashrc file. If you open those with any text editor, you can add your path by copying the same path we executed in the shell before. Just don't forget to save the files and source them to update the path. ( You can source them by typing **source ~/.zshrc** or **source ~/.bashrc** on your shell ).

Here's the way I like adding path's to my .bashrc:

```bash
if [ -d ~/other/path ]
then
  PATH=$PATH:~/other/path
fi
```

What this script does is that it checks if the directory exists first, and if it does it ads it to the PATH variable.

### Conclusion

The concept of PATH is not difficult one to understand, even though it might seem so at first. Now that you have acquired this knowledge you're one step closer to achieving hackerman status.

That's it, have a great day.
