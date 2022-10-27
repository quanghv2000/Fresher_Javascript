// Array.prototype.forEach có dạng:
Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

// Custom lại hàm forEach:
Array.prototype.asyncForEach = async function (callback) {
  for (let index = 0; index < this.length; index++) {
    await callback(this[index], index, this);
  }
};

const numbers = [1, 2, 3, 4];

async function someFunction(numbers) {
  numbers.asyncForEach(async (number) => {
    const res = await someAPICall(number);
    console.log("--->", res);
  });
}

function someAPICall(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("number: " + number);
    }, 1000);
  });
}

someFunction(numbers);
