const _ = require("lodash");

console.log("Lodash Include!");

const numbers = [1, 2, 3, 5, 6, 7, 8];

const result = _.includes(numbers, 4);

console.log(result); // false

const users = { id: 1, name: "Quang" };

const isUsernameExist = _.includes(users, "Quang");

console.log(isUsernameExist);
