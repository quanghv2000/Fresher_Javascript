/*
    Map.forEach()
    - 	Iterates through the Map in insertion order
*/

let map = new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]);

map.forEach((value, key) => {
  console.log(key, value);
});
