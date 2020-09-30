# Methods

JavaScript methods are actions that can be performed on objects.

A JavaScript **method** is a property containing a function in place of value.
 Methods are functions stored as key:value pair. You can access an object method with the following

**Syntax**

```js
objectName.methodName();
```

In the below example, We have an object with name person and method fullName (),
 we can access the method as given below:

**Method**

```js
var person = {
  firstName: "Rahul",
  lastName: "Sharma",
  fullName: function() {
    return person.firstName + "" + person.lastName;
  }
};

console.log(person.fullName());
console.log(person.fullName); // wrong way without ()
```

**Output**

```js
Rahul Sharma
```

## This in Object JS

This is a very important concept in Javascript. When using this inside of an object, it refers to the current object. As show in the below example, We have an object person and we can access the value in the name property by using this to refer to the current object (person).

```js
var person={
    name:"Rahul",
    greet:function(){
    return "Hi, My name is"+ this.name;
    }
};

person.greet();
```

**Output**

```js
Hi, My name is Rahul
```
