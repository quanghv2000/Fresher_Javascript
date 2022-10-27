/*
    Map - Convert
*/

// 1. Converts a Map to an Object:
const map = new Map([
  ["firstName", "Hà Văn"],
  ["lastName", "Quang"],
  ["age", 22],
]);

const obj = Object.fromEntries(map);

console.log(obj); // { firstName: 'Hà Văn', lastName: 'Quang', age: 22 }

// 2. Convert a Map to an Array:

const arr = Array.from(map)

console.log(arr); // [ [ 'firstName', 'Hà Văn' ], [ 'lastName', 'Quang' ], [ 'age', 22 ] ]