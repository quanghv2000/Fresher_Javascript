/* 
  - Array.prototype.mySome
*/

Array.prototype.myEvery = function (callbackFunc) {
    for (let index in this) {
      if (this.hasOwnProperty(index)) {
        const isSatisfyCondition = callbackFunc(this[index], index, this);
        if (!isSatisfyCondition) {
          return false;
        }
      }
    }
  
    return true;
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
  
  const result = products.myEvery((product, index, originArray) => {
    return product.price > 900;
  });
  
  console.log("result: ", result);
  