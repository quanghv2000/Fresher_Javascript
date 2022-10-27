const _ = require("lodash");

console.log("Lodash Sort!");

const array = [
  { id: 1, name: "Quang", age: 24 },
  { id: 2, name: "Quang", age: 22 },
  { id: 3, name: "Smith", age: 23 },
];

// const result = _.sortBy(array, item => item.age);
const result = _.sortBy(array, ['name', 'age']);
console.log(result);
