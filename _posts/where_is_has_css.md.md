---
title: "Where(), is(), and has(), CSS Pseudo classes."
excerpt: "A brief explanation of how the CSS pseudo classes where(), is() and has() work, with examples."
coverImage: "/assets/birbs/blackleggedseriema.jpeg"
birbName: "Black Legged Seriema / Chunga burmeisteri"
birbLink: "https://ebird.org/species/bllser1"
tags: ["personal"]
date: "29/06/2023"
author:
  name: Tony Jara
  picture: "/assets/author/myface.jpeg"
ogImage:
  url: "/assets/birbs/blackleggedseriema.jpeg"
---

This new pseudo-classes dropped in 2022, fairly new but already working in almost all browsers.

**SPECIFICITY** is going to be an important concept to learn before approaching this pseudo-classes.

_Specificity is the algorithm used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element. --Mozilla.org_

So you can think of it as the hierarchy of elements. Normally if you have 2 equal elements, the changes to the last one are going to overwrite the previous, this means the later one has more specificity.

## is()

It's an easier way to select several things inside classes. For example, if your page has a class of .page-one, and you want to select a few tags in that class you would do it like this:

```css
.page-one h1,
.page-one h2,
.page-one a {
  color: blue;
}
```

What _is()_ allows us to do is to put those elements in a comma separated list:

```css
.page-one :is(h1, h2, a) {
  color: blue;
}
```

This can really help us clean up our code. But _is()_ also has other advantages, for example if we try to select an invalid element with the old way, it would break all of the other element's css, but the selector inside _is()_ is more forgiving.

```css
/* This will break because you can't start classes with numbers */
.page-one h1,
.page-one h2,
.page-one .1a {
  color: blue;
}

/* This will continue working */
.page-one :is(h1, h2, .1a) {
  color: blue;
}
```

**A very important** thing to note when using _is()_ is that it will take the specificity of the highest element in it's list.

```css
.page-one :is(h1, h2, .some-class) {
  color: blue;
}

.page-one h1,
.page-one h2 {
  color: red;
}
```

In this example, even though we have color red after the _is()_ instance, the h tags will be blue, because inside the list there's a class, this will share it's specificity with the other elements.

## where()

It works exactly the same way as _is()_ with the exception that it has no specificity. For example:

```css
h3 {
  color: red;
}

:where(h3) {
  color: blue;
}
```

Even though they're the same element and where comes after the h3, the color red will prevail because using _where()_ means that elements inside it's list will not have specificity.

## has()

Now this is newer pseudo-class is really interesting. I'm going to start off with an example because it's really easy to understand that way.

```css
.card:has(img) {
  background-color: red;
}

.card:has(a) {
  color: blue;
}
```

_Is your mind blown yet?_

With this pseudo class you can apply css only to the elements that contain the things you put inside the _has()_. Imagine the .card is a class where we have card with either images or links. With _has()_ we can apply styling to them individually.

Another cool thing we can do with _has()_ ( and I think has requires a blog post all on itself ) is to combine it with descendant selectors.

```css
.card:has(img) > h3 {
  background-color: red;
}

.card:has(a) > h2 {
  color: blue;
}
```

In this example the h3 that has a parent with an image would get a red background and in the second example the h2's with an anchor tag as a parent would get color blue.

If you want to dive deeper into _has()_ I recommend you watch [this video](https://www.youtube.com/watch?v=OGJvhpoE8b4).

Special thanks and credits to [Kevin Powell](https://www.youtube.com/@KevinPowell), this blog post is based on [this video](https://www.youtube.com/watch?v=3ncFpP8GP4g) that he made.

Thanks for reading!
