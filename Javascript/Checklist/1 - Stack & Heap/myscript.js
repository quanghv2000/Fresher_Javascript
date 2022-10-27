// Stack and Heap

// 1. Stack: Nơi mà javascript sử dụng để lưu trữ các static data

const company = 'FPT Software';
const balance = 2000;
let isActive = true;
let name = "Quang";
let birthDate = null;

// Stack sẽ lưu các biến trên như sau:

// | const company = 'FPT Software'; |
// | const balance = 2000;           |
// | let isActive = true;            |
// | let name = "Quang";             |
// | let birthDate = null;           |

// 2. Heap: // Cấp phát bộ nhớ động

const user = {
    id: 1,
    name: "Quang",
    age: 22
}

user.company = 'FPT Software'

function isHeap() {
    return 'This is Heap Example!';
}

const employees = ["John", "Smith", "Quang", "Tuan"];
employees.push("Lan");

const isDone = true;

// Stack:

// isDone = true
// user (tham chiếu đến object "user")
// isHeap (tham chiếu đến function)
// employees (tham chiếu đến object "employees")

//--------------------------------------

// Heap:

// {
//     id: 1,
//     name: "Quang",
//     age: 22
// }

// function isHeap() {
//     return 'This is Heap Example!';
// }

// ["John", "Smith", "Quang", "Tuan"]

// * Các biên "user", "isHeap", "employees" nằm trong stack 
// giữ tham chiếu đến các object và function nằm trong heap

// Ví dụ: 

const a = 4; // => a = 4 được lưu trong stack
const person = {
    name: "Tuan"
} // person được lưu trong stack tham chiếu đến {name: "Tuan"} lưu trong heap