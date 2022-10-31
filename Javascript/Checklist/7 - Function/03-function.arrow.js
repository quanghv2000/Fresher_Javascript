/*
    Arrow Function
    - Không thể sử dụng Arrow Function làm Function Constructor
    - Vì arrow function không định nghĩa "this" key word
*/

// 1. Syntax
const foo = () => {
    // Do something...
}

// 2. Example
const course = {
    name: "Javascript",
    price: 235,
    age: 22,
    getName: function() {
        return this.name; // has context
    },
    getAge: () => {
        return this.age; // no context => undefined
    }
}

console.log(course.getName()); // Javascript
console.log(course.getAge()); // undefined