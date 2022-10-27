/*
    6. configurable
    - true if the type of this property descriptor may be changed (* Note: Chưa hiểu phần này)
    and if the property may be deleted from the corresponding (tương ứng) object.
    - Defaults to false.
    => Cannot re-assign value and delete property when configurable = false
*/

const configurable = {
  name: "Quang",
  age: 22,
};

console.log("----- configurable before -----");
console.log("configurable: ", configurable);
console.log(
  "name descriptor: ",
  Object.getOwnPropertyDescriptor(configurable, "name")
);

Object.defineProperty(configurable, "name", {
  configurable: false,
  writable: false,
});

// Object.defineProperty(configurable, "name", {
//     writable: true,
//     enumerable: true
// });

configurable.age = 23;
delete configurable.name;

console.log("----- configurable after -----");
console.log("configurable: ", configurable);
console.log(
  "name descriptor: ",
  Object.getOwnPropertyDescriptor(configurable, "name")
);

// => Cannot re-assign value and delete property when configurable = false
