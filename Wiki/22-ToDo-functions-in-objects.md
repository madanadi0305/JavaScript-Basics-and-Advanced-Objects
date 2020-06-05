# To-Do : Write a JS Program to show the usage of functions in objects.

In JavaScript, objects are king. If you understand objects, you understand JavaScript.
Functions can be given as values to the objects. The following example demonstrates how to do that.  
This program uses the up function in fob object to convert a string stored in that object into uppercase.

Steps:

- Open **practice12.js**
- Copy the below code in that file.
- Commit yoru code then see pipeline for output

```js
var fob = {
  up: function(x) {
    return x.toUpperCase();
  },
  char: "hello"
};
var n = fob.up(fob.char);
console.log(n);
```