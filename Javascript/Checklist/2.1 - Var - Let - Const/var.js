// var

// 1. Scope: global & function scope
// 2. Re-assignable - Có thể gán lại: Yes
// 3. Re-declarable - Có thể khai báo lại: Yes
// 4. Hoisting: Yes

// 1. Scope
console.log('1. Scope')

var language = "JavaScript";

function foo() {
    var language = "Python";
    framework = "React";
    console.log(language);
}
 
foo(); // "Python"
console.log(language); // "JavaScript"
// console.log(window.language); // "JavaScript"
// console.log(window.framework); // "React"

// 2 & 3. Re-assignable & Re-declarable: Yes
console.log('2 & 3. Re-assignable & Re-declarable')

var name = "Quang";
var name = "John"; // Re-declarable - Khai báo lại biến

console.log(name); // "John"
name = "Tuan"; // Re-assignable Gán lại biến
console.log(name); // "Tuan"

// 4. Hoisting: Yes
console.log('4. Hoisting: Yes')

myVar = "Hoisting"

console.log(myVar);

var myVar;
