const _ = require("lodash");

console.log("Lodash Fill!");

const numbers = [1, 2, 3, 5, 6, 7, 8];

_.fill(numbers, 4, 3, 6); // replace numbers[3,4,5] 3- <6

console.log(numbers);


