# Adding and Modifying Object Properties

To add a new property to an object, you can assign a new value to a property with the (=) operator.

For example, we can add a value 'male' to the person object as the new gender property. Both the dot and bracket notation can be used to add a new property in an object.

**Add gender property to person**

```js
person.gender = "male";
```

**Add gender property to person**

```js
person["gender"] = "male";
```

We can access that value just as above, with either the dot notation or the bracket notation.

```js
person.gender;
```

**Output**

```js
"male";
```

A method can also be added to the object by using the same process.

**Add new fight method to person**

```js
person.fight = function() {
  return "Rahul attacks with an " + this.weapon;
};
```

Once we have created this new object method, we can call it as we did above.

```js
person.fight();
```

**Output**

```js
Rahul attacks with an M416
```

Using the same method, an object's property can be modified by assigning a new value to an existing property.

**Update weapon from M416 to AWP**

```js
person.weapon = "AWP";
```

At this point, if we call the object, we will see all of our additions and modifications.

```js
person;
```

**Output**

```js
{name: "Rahul", age:18, gender:"male", weapon: "AWP", status: , fight: }
```

Through assignment operation, we can modify the properties and methods of a JavaScript object.