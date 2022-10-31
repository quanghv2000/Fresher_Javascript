/*  
    Memory Life Cycle: Allocate => Use => Release
    - Heap: + Dynamic memory allocation - Cấp phát bộ nhớ động
    - stores objects and functions
*/

const person = {
    name: 'John',
    age: 24,
};

const hobbies = ['hiking', 'reading'];

function foo() {
    const a = 1;
    console.log('Function stored in heap!')
}

/*
    Stack:
    - person: reference to "person" object
    - hobbies: reference to "hobbies" array
    - foo: reference to "foo" function

    Heap: 
    - {name: 'John', age: 24}
    - ['hiking', 'reading']
    - foo() {
        console.log('Function stored in heap!')
    }
*/

// stack
const a = 1;
const b = 1;

// heap
const c = [1];
const d = [1];

console.log(a === b) // true --- stack
console.log(c === d) // false --- heap

