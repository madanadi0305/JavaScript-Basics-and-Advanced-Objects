# Object.assign()

**Object.assign()** is used to copy values from one object to another.

We can create two objects, and merge them with **Object.assign()**.

```js
// Initialize an object
const name = {
  firstName: "Philip",
  lastName: "Fry"
};

// Initialize another object
const details = {
  job: "Delivery Boy",
  employer: "Planet Express"
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);
```

In the above example, the properties from _details_ object are copied into _name_ object. Hence, the output is :

**Output**

```js
{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
```