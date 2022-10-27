// Destructuring

const array = ['Javascript', 'Java', 'PHP', 'NodeJS'];

const [javascript, java, , nodejs] = array;

console.log(javascript, java, nodejs); // Javascript Java NodeJS

// 1. Rest: Gộp lại 1 biến như mảng, object
// Rest: Còn lại
const [a, ...rest] = array;

console.log(rest); // ['Java', 'PHP', 'NodeJS']

const course = {
    id: 1,
    name: 'Javascript',
    price: 1000,
}

var { id, name, price } = course;

console.log(id, name, price);

var { name, ...newObject } = course;

console.log(newObject); // {id: 1, price: 1000}

const user = {
    name: 'Quang',
    age: 22,
    email: 'quanghavan29@gmail.com',
    contact: {
        email: 'quanghv2000.dev@gmail.com',
        phone: '0986915765',
    }
}

var { email, contact: { email }, address } = user;

console.log(email); // quanghv2000.dev@gmail.com
console.log(address); // undefined

var {
    email: userEmail,
    contact: { email: contactEmail },
    address = 'default value',
} = user;

console.log(userEmail); // quanghavan29@gmail.com 
console.log(contactEmail); // quanghv2000.dev@gmail.com
console.log(address); // default value

// rest operator with function

const numbers = [1, 2, 3, 4, 5]

function logger(...params) {
    return params;
}

console.log(logger(numbers)); // [Array(5)]: 1, 2, 3, 4, 5

function foo([one, two, ...rest]) {
    return rest;
}

console.log(foo(numbers)); // [3, 4, 5]

function foo2({name, age, email, ...rest}) {
    console.log(name); // Quang
    console.log(age); // 22
    console.log(email); // quanghavan29@gmail.com
    console.log(rest); // {{contact: {…}}
}

foo2(user);