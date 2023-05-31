---
title: "Don't deploy your email server"
excerpt: "A story of why you should never deploy your own email server"
coverImage: "/assets/birbs/yellowmacaw.jpg"
birbName: "Blue-and-yellow Macaw | Ara ararauna"
birbLink: "https://ebird.org/species/baymac"
tags: ["personal"]
date: "Tue May 30 2023 11:37:22 GMT-0400 (Paraguay Standard Time)"
author:
  name: Tony Jara
  picture: "/assets/author/myface.jpeg"
ogImage:
  url: "/assets/birbs/greathornedowl.jpg"
---

# Maybe managing your own email server is not the best idea

I know, i know, everyone says you shouldn't deploy an email server, trust me, I had a good reason for it!
In this blog I'll talk about why I did, how I did it I why you shouldn't.

## My good reason

I started volunteering at a nonprofit, if you're a software developer, more often than not you are going find that there's a lot to do anywhere you look, this organization was not the exception.

Before I started volunteering, the organization only had one guy ( another volunteer) managing their website and email servers. Everything was done in straight up HTML, I kid you not, when I asked access to edit some stuff on the website, he gave me access to a google drive folder. Literally every webpage had a copy of the footer, the navbar and other components. All the files where then hosted in a CPANEL instance on some shared instance of some obscure hosting provider. And for those of you that don't know what CPANEL is, it's an app that you use to manage pretty much everything you need for a webpage, sort of like WordPress, but worse. And of course, that includes emails.

## How I did it

Everyone at the organization knew this wasn't an ideal scenario, the emails kept going to spam or not working at all, uploading anything new to the website took way too long, and it was just not a good solution.
So I started doing some research, I needed to come up with a solution to migrate the email servers before I could even touch the website. This is where I came across with what seemed like an easy solution for an email server ( keep in mind that before I went through this experience I was thinking, how hard could it be? ). I found [Mail-in-a-box](https://mailinabox.email/).

## Troubleshooting

The first gotcha when you're creating an email server is that a lot of companies that offer VM's lock PORT 25, which is used by default by lots of these "make your own email server" apps, and maybe there's a way around it, but that's where my networking abilities ended. So I picked digital ocean as a provider because they really don't care how you use the VM. Which is also why you really should check if that VM's IP address is blacklisted, which turns out a lot of digital ocean's IP's are. Normally you wouldn't really care about this, but since the intention was to make an email server I made sure the IP address was clean before I deployed the mail-in-a-box server. You can check if an IP address is blacklisted by visiting this [this](https://mxtoolbox.com/blacklists.aspx) address.

I started running some tests to see if it was going to work out and I was surprised to see how easy it was, I'm a genius! I thought. So I started migrating everything to the new server, changing the DNS settings, getting rid of the old server and even recording some tutorials for people to quickly get up to speed with connecting the new email addresses to their favorite email apps, on desktop and mobile.

_"We have a new email server!"_

## Where it all went terribly wrong

Emails on organizations are extremely important, in some cases it can be their main way to communicate with customers or in the case of this organization, their donors. An easy way to solve this would've just been to sign up everyone to something like google workspace and be done with it, but the 6$ per account price, for over 30 email accounts was just too much for them to pay.

Some of this accounts, where shared between several members of the organization, and this is a huge no no when you're using POP3 as the protocol for storing and distributing emails.

_"Tony, our donors are asking why we're not responding their emails"_

I started running some tests to see if I could replicate this, and it was a mess, sometimes the emails would go into one account, and then no one else would get it, other times another account would get it, but in none of those instances the emails where stored in the webmail server that mail-in-a-box offered. Those emails where gone.

I'm not going to go in depth into why this happened, but just know if you're using POP3, you should never try to link multiple accounts.

## The solution

I quickly told the team what I learned, changed the passwords of all the shared accounts, and told them to only check the emails from those accounts through the webmail until I can come up with a better solution. This reestablished the flow of emails, so we were safe for the moment.

A few months into the email server being deployed, the organization was awarded with [Microsoft's non-profit's grant](https://nonprofit.microsoft.com/) . Among the things that this grant offers are Microsoft's exchange emails, so it was a no brainer, I migrated all of the emails to Microsoft. And that was it, no more email issues, let Microsoft deal with it.

## Conclusion

_Do not. Deploy. Your. Email. Server._

I'm sure if I kept maintaining the server I would found more stuff to deal with. So I'm happy I'm not doing it anymore, your peace of mind does have a price sometimes. So do yourself a favor and don't deploy you own email server.
