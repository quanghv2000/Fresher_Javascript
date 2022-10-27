// const -- hằng số

// 1. Scope: block scope {}
// 2. Re-assignable - Có thể gán lại: No
// 3. Re-declarable - Có thể khai báo lại: No
// 4. Hoisting: No => stored in "Temporal Dead Zone"

// 1. Scope: block scope {}

const language = "JavaScript";

{
    const language = "React"; // Phạm vi khối
    console.log(language); // "React"
}

function foo() {
    const language = "Python";
    console.log(language);
}

foo(); // "Python"
console.log(language); // "JavaScript"
// console.log(window.language); // undefined

// 2. Re-assignable - Có thể gán lại: No
// 3. Re-declarable - Có thể khai báo lại: No
// 4. Hoisting: No

// Change properties in const example
const user = {
    name: "Quang",
    age: 24,
}

user.name = "John";

console.log(user); // { name: 'John', age: 24 }

const numbers = [];
numbers.push(1,2,3);
console.log(numbers);

const fun = 'bar'; 
// fun = 'bar2';       // error - can not re-assign
// var fun = 'bar3';   // error - already declared
// function fun() {};  // error - already declared