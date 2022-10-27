const _ = require("lodash");

console.log('Lodash Chunk!');

const array = [1, 2, 3, 4, 5, 6];

const result = _.chunk(array, 3);

console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

