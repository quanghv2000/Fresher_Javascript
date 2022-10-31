/*
  Arrow Function - Object literal
  - () => {object:literal} will not work as expected.
*/

// Calling func1() will returns undefined!
var func1 = () => { foo: 1 };

console.log("func1(): ", func1()); // func1():  undefined

// FIXED func1 -> 
var func1Fixed = () => ({ foo: 1 });

console.log("func1Fixed(): ", func1Fixed()); // func1Fixed():  { foo: 1 }

// SyntaxError: function statement requires a name
var func2 = () => { foo: function() {} }; // Error

// FIXED func2 -> 
var func2Fixed = () => ({ foo: function() {} });

// Use Expression Function Not Error
var func2Express = function () {
  return {
    foo: function() {}
  }
}


