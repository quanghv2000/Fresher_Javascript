/*
    Arrow Function - Callback
*/

// 1. Parsing order

let callback;

callback = callback || function() {}; // ok

// SyntaxError: invalid arrow-function arguments
callback = callback || () => {};

// FIXED
callback = callback || (() => {});    // ok

// 2. Callback Using Arrow Function
// -- This can be used as callbacks

// Declaretion function as calback
[1, 2, 3, 4, 5].forEach(function (num) {
  console.log(num);
});

// Arrow function as calback
[6, 7, 8, 9, 10].forEach((num) => console.log(num));
