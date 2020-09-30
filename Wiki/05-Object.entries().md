# Object.entries()

Object.entries creates a nested array of all the key/value pairs of an object.

```js
// Initialize an object
var operatingSystem = {
  name: "Ubuntu",
  version: 18.04,
  license: "Open Source"
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);
```

**Output**

```js
[["name", "Ubuntu"][("version", 18.04)][("license", "Open Source")]];
```

Once we have the all key/value pair arrays, we can use the forEach() method to loop through and work with the results.

**Loop through the results**

```js
entries.forEach(entry => {
  let key = entry[0];
  let value = entry[1];

  console.log(`${key}: ${value}`);
});
```

**Output**

```js
name: Ubuntu
version: 18.04
license: Open Source
```

The Object.entries() method will only return the object instance's own properties and not any properties that may be inherited by the object.