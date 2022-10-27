var _ = require('lodash');

console.log("Lodash Join!");

let array = ["Quang", "John", "Smith"];

// const result = array.join('-');

// console.log(result);

const result = _.join(array, '-');

console.log(result);