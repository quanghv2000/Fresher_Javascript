/* 
  - Array.prototype.mySome
*/

Array.prototype.mySome = function (callbackFunc) {
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      const isSatisfyCondition = callbackFunc(this[index], index, this);
      if (isSatisfyCondition) {
        return true;
      }
    }
  }

  return false;
};

const products = [
  {
    name: "iPhone 14",
    price: 1190,
  },
  {
    name: "iPhone 13",
    price: 1090,
  },
  {
    name: "iPhone 12",
    price: 990,
  },
];

const result = products.mySome((product, index, originArray) => {
  return product.price > 1090;
});

console.log("result: ", result);
