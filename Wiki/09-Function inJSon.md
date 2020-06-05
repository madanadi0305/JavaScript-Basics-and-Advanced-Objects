# Functions for Working with JSON

This section will look at two methods for working with JSON. You will learn how to convert JSON from object to string and string to object. This is very useful for transferring and storing data.


### JSON.stringify()

The JSON.stringify() function converts an object to a JSON string. Data is transferred from the front end to the back end in string format.

Strings are useful for transporting data from a client to a server in a lightweight way. For example, you can get a user’s information on the client-side (browser) and then send it to a server in the form of a string. Later, you can then convert the information (string) into an object with the JSON.parse() method and work with the data as needed.

In the below example, We have a JSON object which is assigned to the variable obj, and then we convert it into string using JSON.stringify() by passing obj to the function. We also assign this string to the variable s as shown below:

```js
var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"};

var s = JSON.stringify(obj)
```
Now, if we work with s, we’ll have the JSON available to us as a string rather than an object.

```js
'{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}'
```

The JSON.stringify() function lets us convert objects to strings. To do the opposite, we’ll look at the JSON.parse() function.



### JSON.parse()

Strings are useful for transporting but you’ll want to be able to convert them back to a JSON object on the client and/or the server-side. 
To convert the example in the JSON.stringify() section above, we would pass the string s to the parse() function, and assign it to a new variable:

```js
var o = JSON.parse(s);
```

Now, we have the object o to work with, which would be similar to the object obj. JSON.parse() is a secure function to parse JSON strings and convert them to objects.
<Demo>
To take a deeper look, let’s consider an example of JSON.parse() within the context of an HTML file:
Within the context of an HTML file, we can see how the JSON string s is converted to an object that is retrievable on the final rendering of the page by accessing the JSON via dot notation.



```html
<!DOCTYPE html>
<html>
<body>

<p id="user"></p>

<script>
var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

var obj = JSON.parse(s);

document.getElementById("user").innerHTML =
"Name: " + obj.first_name + " " + obj.last_name + "<br>" +
"Location: " + obj.location;
</script>

</body>
</html>
```

**Output**

```
Name: Sammy Shark
Location: Ocean
```