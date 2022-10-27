/*
    Arrow Function - Callback
*/

// 1. Parsing order

// let callback;

// callback = callback || function() {}; // ok

// callback = callback || () => {};
// // SyntaxError: invalid arrow-function arguments
// // fix
// callback = callback || (() => {});    // ok

// 2. Callback Using Arrow Function
// -- This can be used as callbacks

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(x);
});

[6, 7, 8, 9, 10].forEach((x) => console.log(x));
