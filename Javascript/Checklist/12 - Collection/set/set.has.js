/*
    Set.has()
    - Checks for the presence of an item in a Set
    - Return Boolean
*/

const set = new Set([1, 2, 3, 4, 5]);

console.log(set.has(1)); // true
console.log(set.has(5)); // true
console.log(set.has(6)); // false

