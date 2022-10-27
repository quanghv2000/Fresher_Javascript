const _ = require("lodash");

console.log("Lodash Comparison!");

const user1 = { id: 1, name: "Quang" };

const user2 = { id: 2, name: "Quang" };

console.log(user1 === user2);

const array1 = [
  { id: 1, name: "Quang" },
  { id: 2, name: "John" },
];

const array2 = [
  { id: 1, name: "Quang" },
  { id: 2, name: "John" },
];

const result = _.isEqual(array1, array2);

console.log(result);
