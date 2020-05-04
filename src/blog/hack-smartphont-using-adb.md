---
id: hack-smartphont-using-adb
title: Hack smartphone using adb
author: Saheb Giri
date: 20 May 2020
tags: ["android", "hack",]
---

ADB stands for Android Debug Bridge. The name itself self explanatory. It allows us to connect to android devices. ADB helps in do all the thing that you do in your phone. This is primarily developed for android app developer. Enough of introduction, so let's make your hands dirty.

## Architecture of adb

It works on server- client model, which means there is a server and a client stays in your PC(Yes both client and server). There is a piece of code in your Android Device called daemon which runs in background. When the server send command, it performs it and return back the response to the server. And then the server send the response to client which eventually show you the output.

## How to install adb?

1. Visit the link given below and download the platform tools and install it in you PC. 
   [Android Developer Site](https://developer.android.com/studio/releases/platform-tools)
2. Extract it in your folder and using console navigate to the  folder where you have extracted. For me this is what it looks like.
3. Now turn on the developer mode and USB Debugging option in your android phone. Connect your android device to your PC. 

## Install apps in your phone

```bash
./adb install path_to_apk
```

## Full access of your phone 

```bash
./adb shell
```

## Take screenshot using console

```bash
> ./adb shell
> screencap /sdcard/screen.png
> exit
> ./adb pull /sdcard/screen.png
```

## Record you phone screen as video
Press Control + C to stop recording
```bash 
> ./adb shell
> screenrecord /sdcard/video.mp4
> exit
> ./adb pull /sdcard/video.mp
```