/*
    Map.entries()
    - Returns all keys and values in a Map as [key, value]
*/

const map = new Map();

map.set('0', 'foo');
map.set(1, 'bar');

const iterator = map.entries();

console.log(iterator.next().value);
// expected output: ["0", "foo"]

console.log(iterator.next().value);
// expected output: [1, "bar"]
