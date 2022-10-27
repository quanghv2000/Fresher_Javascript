/*
    This with Declaration Function
*/

const foo = () => {
    return this;
}

console.log(foo()); // {} || window

const test = {
    prop: 42,
    func: () => {
      return this.prop; // no have context
    },
    myTest: () => {
        return this;
    },
  };
  
  console.log(test.func()); // undefined
  console.log(test.myTest()); // {} || window
  