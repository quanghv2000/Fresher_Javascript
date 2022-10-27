/*
    Map.has(key)
    - Checks for the presence of an element in a Map by key
    - Return Boolean
*/

const map = new Map();
map.set("bar", "foo");

console.log(map.has("bar")); // true

console.log(map.has("baz")); // false