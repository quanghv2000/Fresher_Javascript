/*
    Các loại function

        1. Declaration function
        2. Expression function
        3. Arrow function
*/

// 1. Declaration function
showMessage();

function showMessage() {
    console.log("Declaration function!");
}

// 2. Expression function
console.log(foo)

var foo = function () {
    console.log("Expression function!")
}

foo();

// setTimeout(function () {

// })

// var user = {
//     foo: function () {

//     }
// }

// 3. Arrow function