/*
    Map.delete()
    - Removes a key/value pair from a Map by key
    - Return Boolean
*/

const map = new Map();
map.set("bar", "foo");

console.log(map.delete("bar")); // true

console.log(map); // Map(0) {}

