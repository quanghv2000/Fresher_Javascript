const _ = require("lodash");

console.log("Lodash Size!");

const persons = [
  { id: 1, name: "Quang" },
  { id: 2, name: "John" },
  { id: 3, name: "Smith" },
];

const sizeOfPersons = _.size(persons);
console.log("size of persons: ", sizeOfPersons);
