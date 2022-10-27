/*
  Arrow Function - Object literal
  - () => {object:literal} will not work as expected.
*/

var func1 = () => { foo: 1 };
// Calling func() returns undefined!
// fix -> 
var func1Fixed = () => ({ foo: 1 });

console.log(func1());

var func2 = () => { foo: function() {} };
// SyntaxError: function statement requires a name
// fix -> 
var func2Fixed = () => ({ foo: function() {} });

// Use Expression Function
var func3 = function () {
  return {
    foo: 1,
  }
}
console.log(func3())

var func4 = function () {
  return {
    foo: function() {}
  }
}
console.log(func4())


