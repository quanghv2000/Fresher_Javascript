/*
    For/in Loop
    - For ... in được sử dụng để được sử dụng để lặp lại trên 
    tất cả các enumerable properties của một Object.
    => Có thể duyệt qua object, array, string
*/

// 1. Object: key in object is property
console.log("---- For/in with object -----");
var user = {
  id: 1,
  name: "Quang",
  age: 22,
};

for (var key in user) {
  console.log(`${key}: ${user[key]}`);
}
/*
    id:  1
    name:  Quang
    age:  22
*/

// 2. Array: key in array is index
console.log("---- For/in with array -----");
var persons = ["Quang", "John", "Smith",,"Nam", null, undefined];

for (var key in persons) {
    console.log(`${key}: ${persons[key]}`);
}
/*
    0: Quang
    1: John
    2: Smith
*/

// 2. Array: key in string is index
console.log("---- For/in with string -----");
var myString = "nodejs";

for (var key in myString) {
    console.log(`${key}: ${myString[key]}`);
}
/*
    0: n
    1: o
    2: d
    3: e
    4: j
    5: s
*/
