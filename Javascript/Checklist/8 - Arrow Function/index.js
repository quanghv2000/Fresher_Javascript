/*
    Arrow Function
     - Note:
     1. Arrow function ko có context
     2. Arrow function ko thể sử dụng làm function constructor
     3. The call, apply and bind methods are NOT suitable (thích hợp) as arrow functions
*/

const logger = (message) => {
    console.log(message);
};

logger('Arrow Function!');

// 1. Arrow function ko có context
// example:
const course = {
    name: 'Quang',
    getName1: function() {
        return this.name;
    },
    getName2: () => {
        return this.name;
    }
}

console.log(course.getName1()); // Quang
console.log(course.getName2()); // Undefined

// 2. Arrow function ko thể sử dụng làm function constructor
// example
const User = (name, age) => {
    this.name = name;
    this.age = age;
}

const user = new User('Quang', 22); // Error: User is not a constructor

console.log(user);