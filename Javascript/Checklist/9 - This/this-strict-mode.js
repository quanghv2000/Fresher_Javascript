/*
    This in strict mode
    - This trong một hàm là undefined khi ở strict mode
*/

function f2() {
  "use strict"; // see strict mode
  return this;
}

console.log(f2());

console.log(f2() === undefined); // true
