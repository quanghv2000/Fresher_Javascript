/* 
  - Array.prototype.myFilter
*/

Array.prototype.myFilter = function(callbackFunc) {
    const result = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            const isSatisfyCondition = callbackFunc(this[index], index, this);
            if (isSatisfyCondition) {
                result.push(this[index]);
            }
        }
    }

    return result;
}

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

const result =  products.myFilter((product, index, originArray) => {
    return product.price > 1000;
});

console.log("result: ", result);