/*
    Map.values()
    - 	Returns all values in a Map
*/

const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.values();

console.log(iterator.next().value);
// expected output: "foo"

console.log(iterator.next().value);
// expected output: "bar"
