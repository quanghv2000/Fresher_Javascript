/*
    Set.keys()
    - Returns all values in a Set (same as values())
*/

const set = new Set();
set.add(42);
set.add("forty two");

const iterator = set.values();

console.log(iterator.next().value);
// expected output: 42

console.log(iterator.next().value);
// expected output: "forty two"
