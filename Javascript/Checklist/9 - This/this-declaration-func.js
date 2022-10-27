/*
    This with Declaration Function
*/

function foo () {
  return this; // context
}

console.log(foo()); // context

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
  myTest: function myTest() {
    return this;
  },
};

console.log(test.func()); // 42
console.log(test.myTest());
/*
    { 
        prop: 42, 
        func: [Function: func], 
        myTest: [Function: myTest] 
    }
*/
