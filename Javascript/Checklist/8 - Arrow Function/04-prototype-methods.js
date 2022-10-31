/*
    Arrow Function - Prototype Methods
    - Arrow functions do not have a prototype property.
*/

// Expresstion Function
var expressFunc = function () {};
console.log(Foo1.prototype);
/*
    {
        constructor: ƒ ()
        [[Prototype]]: Object
    }
*/

// Arrow Function
var arrowFunc = () => {};
console.log(Foo2.prototype); // undefined
