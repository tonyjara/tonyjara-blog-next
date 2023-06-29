---
title: "How to open your blog folder from Obsidian"
excerpt: "If you prefer Obsidian to write blogs and you have a website that converts Markdown to HTML, there's in this blog I'll show you link both."
coverImage: "/assets/birbs/masked-tityra.jpeg"
birbName: "Masked Tityra / Tityra Semifasciata"
birbLink: "https://ebird.org/species/mastit1"
tags: ["personal"]
date: "06/06/2023"
author:
  name: Tony Jara
  picture: "/assets/author/myface.jpeg"
ogImage:
  url: "/assets/birbs/masked-tityra.jpeg"
---

**disclaimer: I'm a mac user**

I don't know about you but I love [Obsidian](https://obsidian.md/). It just makes the most sense for everything I do. If you're not familiar with Obsidian, it's a note taking app in which every note you take is a Markdown file. And this is particularly awesome for me because my blog is in [Markdown](https://en.wikipedia.org/wiki/Markdown).

_Obsidian also supports vim ☕_

For a while I was writing my blogs directly on Obsidian, then copy pasting everything into my blog's posts folder. And that was ok, but I was thinking, it would be so cool if I could just write everything once and deploy to my blog.

Doing some research I found out that there are a lot of community plugins that integrate Obsidian with Git. Which is nice, but I feel that handling Git from Obsidian is never going to be as nice as handling it from your IDE, and the thought of having all those extra files just made me sick to my stomach. I just wanted to be able to open my blog folder straight from Obsidian and start writing. That's when it hit me. The answer is [_Symbolic Linking!_](https://en.wikipedia.org/wiki/Symbolic_link)

A symbolic link or a symlink for short is a reference to a file or directory, sort of like aliases but better, if you symlink a folder to a specific place, it doesn't matter if you move that folder, the symlink will remain in place. This allows us to open only the desired folder, which in my case was my posts folder, inside any vault or directory in Obsidian.

This is how you do it:

- Inside your terminal, cd into the directory you want to create the symlink, in my case it was inside my Obsidian vault
- Type _"ln -s "_ , leave a space after the "s" and then drag and drop the folder you want symlink and press enter.
- Done, enjoy a lovely editing experience.

This is an example on how that code would look like in the terminal. DO NOT copy and paste this, you need to replace the path accordingly.

```bash
cd ~/Library/Mobile Documents/iCloud~md~obsidian/Documents/The universe/Personal

ln -s /Users/nytoair/Desktop/web-tonyjara/_posts

```

It's worth mentioning that this will not sync the symlinked folder with your Obsidian account across your devices, which is exactly what I wanted, I'm already relying on Git for versioning on my website. But if that's something you're interested in, I recommend taking a look into [hard links.](https://en.wikipedia.org/wiki/Hard_link)

That's it! Have a good one.
