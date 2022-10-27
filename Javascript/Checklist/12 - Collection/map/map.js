/*
    Map
    - Có nhiều điểm tương đồng với object
*/

// 1. Syntax
const map = new Map();

// 2. Add value to a Map

// set() method
map.set("firstName", "Hà Văn");
map.set("lastName", "Quang");
map.set("age", 22);

// khởi tạo trực tiếp
const map1 = new Map([
  ["firstName", "Hà Văn"],
  ["lastName", "Quang"],
  ["age", 22],
]);

// Object.entries(object) // [key, value]
const myInfo = {
  firstName: "Hà Văn",
  lastName: "Quang",
  age: 22,
};

const map2 = new Map(Object.entries(myInfo));

console.log(map);
console.log(map1);
console.log(map2);