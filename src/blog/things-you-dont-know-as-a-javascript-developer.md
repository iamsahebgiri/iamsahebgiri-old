---
id: things-you-dont-know-as-a-javascript-developer
title: Things you don't know as a javascript developer
author: Saheb Giri
date: 05 May 2020
tags: ["javascript", "TIL"]
---
## Currying in functioal programming 

Javascript is a multiparadigm programming language. It is not purely functional. Currying is a technique named after Haskell Curry. The main idea behind this concept is that instead to taking multiple arguments, it takes a single argument in each function.

Javascript functions are first class citizen, which means it can be treated like any other data types, say string, boolean or may be be number. A variable can store a function like other.

Another thing to note that Javascript functions can return a function. Now coming to the topic of currying. It goes something like this. Let's say we have to number to add. How will solve this problem? Well pretty simple. 

```js
function add(a, b) {
  return a + b;
}
// calling the function
add(5+8);
```

On applying currying technique it can be rewritten as follows

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}

// calling the function
add(5)(8);
```

## Pure Function

A function that always gives the same result when a same argument is passed into it.


```js
// Not a pure function
function fn(num) {
  return num * Math.random();
}
```

The above function is not pure because it changes everytime you call it.


```js
// pure function
function fun(num) {
  return num * 2;
}
```


The above function is pure because the return value is never going to change as long as you provide the same argument.



## Higer order function 

The function which takes another function as argument is called Higer order function. Eg. map(), filter() , setTimeout(), etc. 

```js 
const numbers = [65, 44, 12, 4];
const newarray = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
```