/*
    Set.size()
    - 	Returns the number of items in a Set
    - Return Number
*/

const set = new Set();
const object = {};

set.add(42);
set.add('forty two');
set.add('forty two');
set.add(object);

console.log(set.size, set);
// expected output: 3 Set(3) { 42, 'forty two', {} }
