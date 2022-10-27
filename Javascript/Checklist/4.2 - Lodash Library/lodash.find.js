const _ = require("lodash");

console.log("Lodash Find!");

const array = [
  { id: 1, name: "Quang" },
  { id: 2, name: "John" },
  { id: 3, name: "Smith" },
];

const result = _.find(array, item => item.id > 1);
console.log(result);
