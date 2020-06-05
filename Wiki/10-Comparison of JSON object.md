# Comparison of JSON to JavaScript Object

Please note that JSON can be used by any programming language, while JavaScript objects can only work with JavaScript programming language.

In terms of syntax, JavaScript objects are similar to JSON, but the keys in JavaScript objects are not strings in quotes. Also, JavaScript objects can pass functions as values in properties but JSON cannot use functions as values.

Let's look at an example of a JavaScript object of the website user Sammy Shark who is currently online.

```js
var user = {
  first_name: "Sammy",
  last_name: "Shark",
  online: true,
  full_name: function() {
    return this.first_name + " " + this.last_name;
  }
};
```

This will look very familiar to you as a JSON object, but there are no quotes around any of the keys (first_name, last_name, online, or full_name), and there is a function value in the last line.

If we want to access the data in the JavaScript object above, we could use dot notation to call user.first_name; and get a string, but if we want to access the full name, we would need to do so by calling user.full_name(); because it is a function.

JavaScript objects can only exist within the JavaScript language, so when you're working with data that needs to be accessed by various languages, it is best to opt for JSON.