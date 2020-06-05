# Object.keys()

Lets say you have an object and you want to get all the keys of the object in an array. You can do that by using keys() method with the following syntax ObjectName.keys().

```js
// Initialize an object
 var employees = {
    boss: "Michael",
    secretary: "Pam",
    sales: "Jim",
    accountant: "Oscar"
};

// Get the keys of the object
var keys = Object.keys(employees);
console.log("Keys are ",keys);

```

```
// Output

Keys are ["boss", "secretary", "sales", "accountant"]

```

<DEMO>
As you know that Array.forEach() method is used to loop through the elements of an array. Similarly, Object.keys can be used with forEach() method to loop through the keys and values of an object as shown below:

```js
// Iterate through the keys

Object.keys(employees).forEach(key => {
    let value = employees[key];

     console.log(`${key}: ${value}`);
});
```

```
// Output
boss: Michael
secretary: Pam
sales: Jim
accountant: Oscar
```

Object.keys is also useful for checking the length of an object.

```js
// Get the length of the keys
var length = Object.keys(employees).length;

console.log(length);
```

```
Output
4
```

Using the length property, we were able to count the 4 properties of employees.