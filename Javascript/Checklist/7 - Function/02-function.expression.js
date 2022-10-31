/*
    Expression Function
*/

// 1. Syntax

var foo = function () {};

// 2. Hoisting

// notHoisted(); // TypeError: notHoisted is not a function

// var notHoisted = function() {
//    console.log('function is not hoisted!');
// };

// 3. Examples and Application

// - Using as a method in object
var myObject = {
    myFunction: function() {
        return "This is example of Expression Function!"
    }
}

// - Using a function as a callback
const myCallback = function() {
    console.log("My callback function expression!");
}

const myTimeout = setTimeout(myCallback, 100);

const myInterval = setInterval(function() {
    // Do something
    console.log("myInterval!");
}, 1000);
