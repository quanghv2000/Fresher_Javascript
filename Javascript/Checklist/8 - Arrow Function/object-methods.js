/*
    Arrow Function - Object Methods
    - Arrow functions do not have their own this
*/

"use strict";

var obj = {
  // does not create a new scope
  a: 10,
  b: () => console.log(this.a, this), // không có context
  c: function () {
    console.log(this.a, this);
  },
};

obj.b(); // undefined {}
obj.c(); // 10 { a: 10, b: [Function: b], c: [Function: c] }
