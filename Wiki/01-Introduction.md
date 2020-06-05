# Introduction to Objects

Javascript has variables that can store data values like numbers and strings. Objects are also variables but they can contain multiple data values. The data values are written as _key: value_ pairs (key and value separated by a **colon**). The key: value pair is called _properties_. Different properties in an object are separated by comma (,). In the given example, we have an object with 2 properties (name:"apple") and (color:"red").

```js
// Create an Object
var objectName;
objectName = { key1: value1, key2: value2 };
```

**Example:**

```js
// Example:

var fruits;
fruits = { name: "apple", color: "red" };
console.log(fruits);
```

**Output:**

```js
// Output:

{ name:"apple", color:"red" }
```

## Creating an Object

With JavaScript, you can define and create your own objects. The first way to do it is by using a list of key: value pairs (like age: 50) inside curly braces { } (called _object literal_). Using an object literal, you both define and create an object in one statement. This is the easiest way to create a JavaScript Object and us advise that you use it frequently.

- The **object literal**, which uses curly brackets:

```
 { }
```

**Initialize object literal with curly brackets**

```js
// Initialize object literal with curly brackets

const objectLiteral = {};
```

The object literal initializes the object with curly brackets.

Given below is an example object, contained in the variable `car`, to describe a car.

We can create an example object, contained in the variable gimli, to describe a character.

**Creating object using literal**

```js
// Creating object using literal
var car={
    type:["BMW","AUDI","MERCEDES","TESLA"];
    model:["X6","R8","GLA","ROADSTER"];
    color:"Royal Blue";
}

```

Let's create a new object `gimli`, which has three properties. Each property consists of a **name: value** pair, also known as **key:value** pair. `weapon` is one of the property names, which is linked to the property value "axe", a string. It has one method, with a method name of greet and the method value consisting of the contents of the function.

Within greet, you may notice the this keyword. When using this inside of an object, it refers to the current object, in this case gimli.

**Sending gimli to the console will print out the entire object.**

```js
console.log(var gimli);
```

```js
{name: "Gimli", race: "dwarf", weapon: "axe", greet: [Function: greet]}
```

Next, we will review a JavaScript object's properties and methods.

## Properties and Methods

Objects can have **properties** and **methods**.

Property is the association between a name (key) and value within an object, and it can contain any datatype. Property generally refers to the characteristic of an object.

A method is a function that is the value of an object property, and therefore a task that an object can perform.

An easy way to remember the difference between object properties and methods is to think of a property as a noun, and a method as a verb. name, race, and weapon are all nouns associated with an object and are properties. fight() or talk() are verbs that might be used as a method function definition.

## Accessing Object Properties

There are two ways to access an object's properties.

- Dot notation: **.**
- Bracket notation: []

Let's revisit our original example object, gimli.

```js
const gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "axe",
  greet: function() {
    return `Hi, my name is ${this.name}!`;
  }
};
```

If we want to retrieve the property value of weapon, we can do so with object dot notation by typing the variable name of the object, followed by a dot (.) and the property or method name.

**Retrieve the value of the weapon property**

```js
gimli.weapon;
```

**Output**

```js
"axe";
```

gimli.weapon outputs the property value, which is "axe". We can also retrieve the same data with object bracket notation. Similar to how you might `[index and access a string]`, the syntax for bracket notation is two square brackets ([]) encasing the property name.

**Retrieve the value of the weapon property**

```js
gimli["weapon"];
```

**Output**

```js
"axe";
```

Both dot notation and bracket notation are used regularly. Dot notation is faster and more readable, but has more limitations. Bracket notation allows access to property names stored in a variable, and must be used if an object's property contains any sort of special character.

In order to retrieve an object method, you would call it much in the same way you would call a regular function, just attached to the object variable.

```js
gimli.greet();
```

**Output**

```js
"Hi, my name is Gimli!";
```

In the example above, we see that the string value for the object method greet() is returned.

We can now move on to modifying object properties through adding name:value pairs or modifying existing ones.

## Adding and Modifying Object Properties

In order to add a new property to an object, you would assign a new value to a property with the assignment operator (=).

For example, we can add a numerical data type to the gimli object as the new age property. Both the dot and bracket notation can be used to add a new object property.

**Add new age property to gimli**

```js
gimli.age = 139;
```

**Add new age property to gimli**

```js
gimli["age"] = 139;
```

We can access that value just as above, with either the dot notation or the bracket notation.

```js
gimli.age;
```

**Output**

```js
139;
```

A method can also be added to the object by using the same process.

**Add new fight method to gimli**

```js
gimli.fight = function() {
  return `Gimli attacks with an ${this.weapon}.`;
};
```

Once we have created this new object method, we can call it as we did above.

```js
gimli.fight();
```

**Output**

```js
"Gimli attacks with an axe.";
```

Using the same method, an object's property can be modified by assigning a new value to an existing property.

**Update weapon from axe to battle axe**

```js
gimli.weapon = "battle axe";
```

At this point, if we call the object, we will see all of our additions and modifications.

```js
gimli;
```

**Output**

```js
{name: "Gimli", race: "dwarf", weapon: "battle axe", age: 139, greet: ƒ, fight: ƒ}
```

Through assignment operation, we can modify the properties and methods of a JavaScript object.

## Removing Object Properties

In order to remove a property from an object, you will utilize the delete keyword. delete is an operator that removes a property from an object.

In the below example, we will remove the weapon property from gimli using delete.

**Remove weapon from gimli**

```js
delete gimli.weapon;
```

**Output**

```js
true;
```

The delete operation evaluates as true if the property was successfully removed, or as false if it was used on a property that doesn't exist.

We can test the output of gimli to see if it succeeded.

```js
gimli;
```

**Output**

```js
{name: "Gimli", race: "dwarf", age: 139, greet: ƒ, fight: ƒ}
```

In the above output, the weapon name and its associated value are no longer available, showing that we have successfully deleted the property.

In the next section, we'll go over ways to iterate through objects in JavaScript.

## Looping Through Object Properties

JavaScript has a built-in type of for loop that is specifically meant for iterating over the properties of an object. This is known as the for...in loop.

**Here is a simplified version of our main object example, gimli.**

```js
const gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "battle axe"
};
```

We can use for...in to traverse through all the properties of gimli and print them to the console. Using bracket notation, we can retrieve the property value as a variable, in this case key.

**Iterate through properties of gimli**

```js
for (let key in gimli) {
  console.log(gimli[key]);
}
```

**Output**

```js
Gimli
dwarf
battle axe
```

We can also retrieve the property name itself using just the first variabe in the for...in loop. We have used a string method to [convert the key values to upper case.]

**Get keys and values of gimli properties**

```js
for (let key in gimli) {
  console.log(key.toUpperCase() + ":", gimli[key]);
}
```

**Output**

```js
NAME: Gimli
RACE: dwarf
WEAPON: battle axe
```

The for...in loop is not to be confused with the for...of loop, which is used exclusively on the Array object type.

Another useful enumeration method is the Object.keys() method, which will return an array of the object's keys.

**Initialize method on gimli object to return property keys**

```js
Object.keys(gimli);
```

**Output**

```js
["name", "race", "weapon"];
```

This method allows us to work with the keys or names of an object as an array, so you can leverage all of the methods available to JavaScript arrays.

## Conclusion

Objects are an extremely useful and versatile feature of the JavaScript programming language. They are some of the main building blocks of writing code in JavaScript, and are a practical way to organize related data and functionality. To-do lists, shopping carts, user accounts, and locations on a webmap are all a few of the many examples of real-world JavaScript objects that you might encounter.

In this tutorial, we learned the difference between properties and methods, how to create objects, and how to add, remove, modify, and loop through object properties. To learn more about JavaScript objects, read about `Working with Objects` on the Mozilla Developer Network.