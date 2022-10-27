/*
    Set
*/

// 1. Syntax
const set = new Set()

// Add items to a Set
set.add('Beethoven')
set.add('Mozart')
set.add('Chopin')

// Sets can only contain unique values
set.add('Chopin')

// Initialize a Set from an Array
const set1 = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])

console.log(set);
console.log(set1);