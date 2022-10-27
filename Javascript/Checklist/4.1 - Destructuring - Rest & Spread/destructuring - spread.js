// 2. Spread: Rãi các phần tử của mảng, object thành từng element riếng lẻ

var array1 = ['java', 'C#', 'PHP'];

var array2 = ['javascript', 'nodejs', 'react'];

// we can using concat(array1, array2);
var array3 = [...array2, ...array1];

console.log(array3); // ['javascript', 'nodejs', 'react', 'java', 'C#', 'PHP']

var object1 = {
    name: 'Quang',
}

var object2 = {
    age: 22,
}

var object3 = {
    ...object1,
    ...object2,
    email: 'quanghv2000.dev@gmail.com',
}

console.log(object3); // {name: 'Quang', age: 22, email: 'quanghv2000.dev@gmail.com'}

function foo(a, b, c) {
    console.log(a, b, c); // java C# PHP
}

// 'java', 'C#', 'PHP'
foo(...array1);