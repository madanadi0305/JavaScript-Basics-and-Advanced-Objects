# Object.values()

Object.values() creates an array containing the values of an object.

```js
// Initialize an object
var csGo = {
  team: "terrorist",
  map: "dust-2",
  kills: 12,
  app: "steam"
};

// Get all values of the object
const value = Object.values(csGo);

console.log(value);
```

**Output**

```js
["terrorist", "dust-2", 12, "steam"];
```

Object.values() allow you to return the data from an object.