/*
    Map.get(key);
    -	Returns a value by key
*/

const map = new Map();
map.set("bar", "foo");

console.log(map.get("bar")); // "foo"

console.log(map.get("baz")); // undefined