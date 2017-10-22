---
layout: default
---
## [](#main)What it is

**Images for Alt** is a Chrome extension that generates descriptive alt tags for
HTML images. It also allows users to replace images with text, or remove images
from the page.

## [](#how)How we made it

We leverage Microsoft's [computer vision API](https://azure.microsoft.com/en-us/services/cognitive-services/) and its
nifty caption creator.

## [](#why)Why we made it

As lovers of web development, we know that conversations about accessibility
often get pushed aside in favor of ones about the latest javascript library
or how to make a page look awesome. It's unfortunate, but we hope that our
speedy extension might make the problem of un-tagged images a little better.

## [](#example)An example

Let's say we have an image embedded on a website like this one:
![](http://cdn3-www.dogtime.com/assets/uploads/2011/01/file_23124_pug-460x290.jpg)

The HTML might look something like this:

```html
<img src="pug.jpg" alt="dog">
```

But with our Chrome extension, it will be updated to be this:
```html
<img src="pug.jpg" alt="Original caption: dog Generated caption: a dog looking at the camera">
```
