/*
    For/of Loop
    - For ... of được sử dụng để lặp qua các iterable objects, 
    lặp lại các giá trị của chúng thay vì các thuộc tính của chúng.
    => Có thể duyệt qua array, string, không thể duyệt qua object
*/

// 1. Array: duyệt qua từng phần tử của mảng 
console.log("----- For/of with array -----")
var users = [
    {
        id: 1,
        name: "Quang",
    },
    {
        id: 2,
        name: "John",
    },
    {
        id: 3,
        name: "Smith",
    },
    ,
    {
        id: 5,
        name: "Smith",
    },
    null,
    undefined,
]

for (var user of users) {
    console.log(user);
}
/*
    { id: 1, name: 'Quang' }
    { id: 2, name: 'John' }
    { id: 3, name: 'Smith' }
*/

// 1. String: duyệt qua từng ký tự của chuỗi 
console.log("----- For/of with string -----")
var myString = "hello";

for (var char of myString) {
    console.log(char);
}
/*
    h
    e
    l
    l
    o
*/
console.log("-----------")
var myInfo = {
    name: "Quang",
    age: 22,
}

for (var key of Object.keys(myInfo)) {
    console.log(`${key}: ${myInfo[key]}`)
}
/*
    name: Quang
    age: 22
*/