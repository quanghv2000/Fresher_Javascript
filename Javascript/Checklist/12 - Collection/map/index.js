/*
    Map
    - Có nhiều điểm tương đồng với object
*/

let myMap = new Map([
  ["name", "John"],
  ["age", 39],
]);

myMap.set[("hobbies", ["cooking", "codeing", "music"])];

// key trong map có thể là number, boolean, object, function
myMap.set(3, "Number");
myMap.set(0, "Boolean");
myMap.set({ car: "BMW", price: 2000 }, "Object");
myMap.set(function () {
  return "foo";
}, "Function");

console.log(myMap.size);
console.log(myMap);

myMap.forEach((value, key) => {
  console.log(key, value);
});

for (var item of myMap) {
  console.log(item);
}
