---
id: hack-smartphont-using-adb
title: Hack smartphone using adb
author: Saheb Giri
date: 20 May 2020
---

ADB stands for Android Debug Bridge. The name itself self explanatory. It allows us to connect to android devices. ADB helps in do all the thing that you do in your phone. This is primarily developed for android app developer. Enough of introduction, so let's make your hands dirty.

## Architecture of adb

It works on server- client model, which means there is a server and a client stays in your PC(Yes both client and server). There is a piece of code in your Android Device called daemon which runs in background. When the server send command, it performs it and return back the response to the server. And then the server send the response to client which eventually show you the output.

## How to install adb?

```sh
./adb shell
```
> Note
> 
> Well that might work

![alt text](https://images.unsplash.com/photo-1552068751-34cb5cf055b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80 "Logo Title")
