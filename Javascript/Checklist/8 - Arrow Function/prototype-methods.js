/*
    Arrow Function - Prototype Methods
    - Arrow functions do not have a prototype property.
*/

var Foo1 = function () {};
console.log(Foo1.prototype);
/*
    {
        constructor: ƒ ()
        [[Prototype]]: Object
    }
*/

var Foo2 = () => {};
console.log(Foo2.prototype); // undefined
