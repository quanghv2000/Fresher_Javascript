/*
    Arrow Function - Object Methods
    - Arrow functions has no contex "this" key word
*/

"use strict";

var obj = {
  // does not create a new scope
  a: 10,
  b: () => console.log(this.a, this), // không định nghĩa "this" key word
  c: function () {
    console.log(this.a, this);
  },
};

obj.b(); // undefined {}
obj.c(); // 10 { a: 10, b: [Function: b], c: [Function: c] }
