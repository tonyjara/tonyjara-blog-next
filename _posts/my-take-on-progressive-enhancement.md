---
title: "My take on progressive enhancement"
excerpt: "How to achieve progressive enhancement with regards of browser comaptibility, css and functionality."
coverImage: "/assets/birbs/brown-noddy.jpg"
birbName: "Brown-noddy / Anous stolidus"
birbLink: "https://ebird.org/species/brnnod"
tags: ["personal"]
date: "01/06/2023"
author:
  name: Tony Jara
  picture: "/assets/author/myface.jpeg"
ogImage:
  url: "/assets/birbs/greathornedowl.jpg"
---

# What is progressive enhancement?

In this article I'll try to put together a broader definition of what progressive enhancement is, in regards to all aspects of the web. At least according to me.

Progressive enhancement at it's core is about accessibility, your website should be available to everyone, on all devices.

Have you ever tried to click on a button on a website when it first started loading and got no response? Well that's one of the reasons why we need progressively enhanced websites.

I'll try to break out progressive enhancement through 3 different angles and give my opinion on all of them.

### Browser compatibility

[Internet explorer still has more than 20 million users](https://thesmallbusinessblog.net/internet-explorer-users/) , my granny is probably a part of this group, but hey, a user is a user. Thankfully internet explorer is officially dead and this number is only going to keep going down. Nevertheless, that number shows that there is still a lot to do with regards to browser compatibility.

One of the best tools we have to help with browser compatibility is [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill), and even though most modern frameworks do a pretty good job supporting all browsers, it never hurts to double check.

Here is an [awesome repository](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills) with some practical, "no-nonsense" solutions to keep things smooth across browsers.

And if you want to easily test and try things across multiple browsers, I recommend [browserstack](https://www.browserstack.com/).

### UI/CSS

A static button will always be better than no button, that's why whenever we're looking to use the latest and greatest features in CSS it's always a good Idea to check the [can i use](https://caniuse.com/) website.

However, the best advice I can give you when using brand new features is to always have a good fallback. A practical way to achieve this could be wrapping your element on a div with a fallback class. Think of it as a net holding your next-level ui from falling through the cracks.

MDM has a [great article](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers) with more information about this.

### Functionality

You should not have to download 5MB of javascript to use the search-bar on a website. Why is it that older websites could achieve this and now it seems like we keep regressing with regards of performance?

To be fair websites are way more complicated than they used to be, but the answer has to do with relying way too much on client side javascript. This means that before we can provide functionality for our ui, the user needs to first have all the pieces of the logic. And of course, in some cases this means downloading 5MB of javascript.

Thankfully the trend these days is to move away from client side javascript and more towards server rendered websites. This gives us a better user experience and helps ship way less javascript to the client.

As of a practical way to achieve progressive enhancement with regards to functionality, it really varies a lot with the intended goal of any website. If you can get away with just static websites, I could not recommend enough [Astro](https://astro.build/), but just as a reference, [in this video](https://www.youtube.com/watch?v=kTg98AcjQN4&t=769s), Kent C. Dodds shows how can achieve just about everything with frameworks like [Remix](https://remix.run/)

### Conclusion

As software developers our mission is to bring our product to everyone, sometimes we tent to forget that not everyone is using the latest computer with the latest OS and browser version. Or maybe we just don't have the time to get into it. So even though these problems are certainly being addressed more and more effectively, I think every developer should always take this concepts into consideration.

Thank you for reading and have an awesome day.
