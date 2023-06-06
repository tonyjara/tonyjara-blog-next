---
title: "Don't deploy your email server"
excerpt: "A story of why you should never deploy your own email server"
coverImage: "/assets/birbs/yellowmacaw.jpg"
birbName: "Blue-and-yellow Macaw | Ara ararauna"
birbLink: "https://ebird.org/species/baymac"
tags: ["personal"]
date: "30/05/2023"
author:
  name: Tony Jara
  picture: "/assets/author/myface.jpeg"
ogImage:
  url: "/assets/birbs/yellowmacaw.jpg"
---

# Maybe managing your own email server is not the best idea

I know, I know, everyone says you shouldn't deploy an email server, but trust me, I had a good reason for it!
In this blog I'll talk about why I did it, how I did it, and why you shouldn't.

## My good reason

I wanted to get more involved in the community and help out a local nonprofit organization by volunteering. As a software developer, more often than not you are going to find loads of opportunities for projects anywhere you look, and this organization was no exception.

Before I started volunteering, the organization only had one part-time volunteer managing their website and email servers. Everything was done in HTML and, I kid you not, when I asked for access to edit a few things on the website, I was given a link to a Google Drive folder. No Github, no Gitlab, nothing. Every webpage had a copy of the footer, the navbar and other components. To make it worse, the files were hosted in a CPANEL instance on a shared instance of some obscure hosting provider. For those of you that don't know what CPANEL is, it's an app that manages pretty much everything you need for a webpage, sort of like WordPress, but much worse. It included email accounts of all the organization’s employees, board members, and various volunteers. The emails kept going to spam or not working at all, uploading anything new to the website took way too long, and everyone in the organization wanted something different. In my mind there had to be a simple solution, couldn’t be that hard, right?

## How I did it

I started doing some research. I needed to come up with a solution to migrate the email servers before I could even touch the website because if I wanted to change the domain I needed to have the emails as a separate service. I came across what seemed like the easy solution I wanted for an email server. I found [Mail-in-a-Box](https://mailinabox.email/) and deployed it.

## Troubleshooting

The first “gotcha” I discovered in creating an email server is that a lot of companies that offer VMs lock PORT 25, which is the default on a lot of the "make your own email server" apps. Maybe there's another way, but that was where my networking abilities ended. To get around this, I chose DigitalOcean as a provider because they don't care how you use the VM, just that your credit card goes through.

Pro tip: check if the VM's IP address is blacklisted; it turned out a lot of DigitalOcean's IPs are (something I regrettably discovered too late). Normally you wouldn't really care about this, but since the intention was to create an email server, I made sure the IP address was clean before I deployed the Mail-in-a-Box server. You can check if an IP address is blacklisted by visiting this [this](https://mxtoolbox.com/blacklists.aspx) address.

I started running some tests to see if my theory would work and was surprised to see how easy it was. “I'm a genius!” I thought. I happily started migrating everything to the new server, changing the DNS settings, getting rid of the old server and even recording some tutorials for the organization to quickly connect the new email addresses to their favorite email apps on desktop and mobile.

_"We have a new email server!"_

## Where it all went terribly wrong

Email communication in NGOs is extremely important, in some cases it can be their only way to communicate with customers, or in the case of this organization, their donors. An easy way to solve this would've just been to sign up everyone to something like Google Workspace and move on, but the $6 per account price for over 30 accounts was just too much for a nonprofit with a tight budget.

Some of these accounts were shared between several members of the organization (for example, the five members of the board all used the same email account). It turns out this sharing is a huge problem when using POP3 as the protocol for storing and distributing emails.

"_Tony, our donors are asking why we're not responding to their emails_" is not a great thing to hear from a nonprofit that relies solely on donations to operate. I started running some tests to see if I could replicate the problem, and it was a mess. Sometimes the emails would arrive into just one of the linked accounts and no one else would get it, other times no one would receive emails; however, all of the “problem” emails were never stored in the webmail server that Mail-in-a-Box offered. All of those emails were gone.

I'm not going to go into depth about why this happened, but just know if you're using POP3, you should never try to link multiple accounts to one email.

## The solution

I quickly told the team what I learned, changed the passwords of all the shared accounts, and advised them to only check the emails from those accounts through the webmail until I could find a solution. This reestablished the flow of emails and we were safe for the moment.

A few months into the email server being deployed, the organization was awarded with [Microsoft's Grant for Non-profits](https://nonprofit.microsoft.com/). Among the various services this grant offers is Microsoft Exchange Server, so the change was a no brainer. I migrated all of the emails to Microsoft and that was it, no more email issues.

## Conclusion

_Do not. Deploy. Your. Email. Server._

I'm sure that if I kept maintaining the server I would have discovered more problems, so I'm relieved that I don’t have to anymore. Sometimes peace of mind does have a price, so do yourself a favor and don't deploy your own email server.
