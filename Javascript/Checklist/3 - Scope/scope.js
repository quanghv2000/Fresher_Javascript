/*  
    Scope
    1. Global
    2. Code block: let, const
    3. Local: var, function
*/

"use strict";

// 1. Global
var message = "Hello!";

console.log(this.message); // Hello!

function logger() {
  console.log(message); // Hello!
}

logger();

// 2. Code block
// if else, for, while, ...
{
  const age = 18;
  console.log(age); // 18

  var name = "Quang";
}

console.log(name);
// console.log(age); // age is not defined

// 3. Local

function foo() {
  var myVar = "dskfh";

  showMessage(); // Local scope!

  let name = "John";
  console.log(name); // John

  function showMessage() {
    console.log("Local scope!");
  }
}

foo();

// console.log(myVar); // Error

// Scope chain: Chuỗi phạm vi

{
  const myScopeChain = "My scope chain";
  {
    const myScopeChain = "My scope chain 2";
    console.log(myScopeChain);
    {
      console.log(myScopeChain);
    }
  }
}

testFunc();

// Global Execution Context (GEC)

/*
    Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).

    The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.
*/


exFunc();

var exFunc = function () {
  console.log('exFunc');
}