/*
    Object.defineProperty
    - The static method Object.defineProperty() defines a new property directly on an object, 
    or modifies an existing property on an object, and returns the object.
    - This method only allows us to change a single property.
*/

// 1. Property Descriptors
var student = {
  name: "Quang",
  age: 22,
};

var descriptor = Object.getOwnPropertyDescriptor(student, "name");

console.log(descriptor);
/*
  {
    "value": "Quang",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
*/

// 2. Demo: Object.defineProperty()
const object1 = {};

Object.defineProperty(object1, "number", { value: 42 });

object1.number = 77;
// throws an error in strict mode

console.log("object1.number: ", object1.number);
// expected output: 42

// 3. Property Descriptors Default when use Object.defineProperty()
console.log(Object.getOwnPropertyDescriptor(object1, "number"));
/*
    { value: 42, writable: false, enumerable: false, configurable: false }
*/

// 7. Object.defineProperties()

const myObject = {};

Object.defineProperties(myObject, {
  property1: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: false,
  },
  property2: {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  property3: {
    value: 3,
    // writable: false,
    // enumerable: false,
    // configurable: false,
  },
});

console.log("myObject defineProperties: ", myObject);
// on terminal: { property1: 1, property2: 2 }
// on browser: {property1: 1, property2: 2, property3: 3}