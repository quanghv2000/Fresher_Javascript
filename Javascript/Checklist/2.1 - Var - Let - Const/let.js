// let

// 1. Scope: block scope {}
// 2. Re-assignable - Có thể gán lại: Yes
// 3. Re-declarable - Có thể khai báo lại: No
// 4. Hoisting: No => stored in "Temporal Dead Zone"


// 1. Scope: block scope {}
console.log("1. Scope: block scope {}")

{
    let language = "React"; // Block Scope = Phạm vi khối
    console.log(language); // "React"
}

console.log(window.language); // undefined
// console.log(language); // error

function foo() {
    let person = "Quang";
    console.log(person);
}

foo(); // Quang
// console.log(person); // error...

// 2. Re-assignable - Có thể gán lại: Yes
console.log("2. Re-assignable - Có thể gán lại: Yes")

let age = 22;
age = 25;
console.log(age); // 25

let temp = "FPT Software"
temp = {
    isHoistingSupport: "No"
}

console.log(temp);

// 3. Re-declarable - Có thể khai báo lại: No

// let company = "FPT Software";
// let company = "Honda";

// 4. Hoisting: No

// console.log(language); // error
// let language;