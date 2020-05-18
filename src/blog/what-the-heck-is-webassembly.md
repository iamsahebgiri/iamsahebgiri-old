---
id: what-the-heck-is-webassembly
title: What the heck is web assembly?
author: Saheb Giri
date: 12-05-2020
tags: ["webassembly", "js"]
---

Webassembly is relatively newer concept. The main idea behind this is to provide native like performance in browser using so called mature language such as C/C++ or Rust. This is really going to change the speed of the web apps and most importantly allowing developers to build high end games, in browser. As of now, V8 supports 4GB of RAM, which means with the combination of webassembly you can build pretty much anything you dream to build in native device.
 
## How does it start? ⛳

Back in the days when netscape captured the web browser market, java applet are the ways to make web site interactive. The problem with applets, is that your applet can't interact with web components like buttons, links, etc. In addition to that the it runs on virtualisation meaning the applet itself is independent. 