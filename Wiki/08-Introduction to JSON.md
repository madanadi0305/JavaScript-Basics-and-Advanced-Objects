# Introduction to JSON

Because JSON is derived from the JavaScript programming language, it is a natural choice to use as a data format in JavaScript. JSON, short for JavaScript Object Notation, is usually pronounced like the name “Jason.”

To begin thinking about where you may use JSON in your JavaScript programs, some general use cases of JSON include:

- Storing data
- Generating data structures from user input
- Transferring data from server to client, client to server, and server to server
- Configuring and verifying data

This tutorial will provide you with an introduction to working with JSON in JavaScript.

## JSON Format

JSON’s format is similar to JavaScript object syntax, but it is entirely text-based. It is a key-value data format that is typically enclosed in curly brackets {}.

When you’re working with JSON, you’ll likely see JSON objects in a .json file, but they can also exist as a JSON object or string within the context of a program.

If you have a JSON object in a .js or .html file, you’ll see the JSON object assigned to a variable as shown in the below example:

```js
var sammy = {
  first_name: "Sammy",
  last_name: "Shark",
  online: true
};
```

Additionally, you may see JSON as a string rather than an object within the context of a JavaScript program file or script. In this case, you may also see it all on one line:

```js
var sammy =
  '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';
```

Converting JSON objects into strings can be particularly useful for transporting data in a quick manner.