/*
    Map.clear()
    - Removes all items from a Map
    - Return N/A
*/

const map = new Map();

map.set("bar", "baz");
map.set(1, "foo");

console.log(map.size, map); // 2

map.clear();

console.log(map.size, map); // 0
