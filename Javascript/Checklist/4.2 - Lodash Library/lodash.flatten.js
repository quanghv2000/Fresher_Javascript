const _ = require("lodash");

console.log("Lodash Flatten!");

const numbers = [[1], [2, 3], 4, [5, [6, 7], [8, 9, [10, [11, 12]]]]];

const resultFlatten = _.flatten(numbers);

console.log(resultFlatten);

const resultFlattenDeep = _.flattenDeep(numbers);

console.log(resultFlattenDeep);
