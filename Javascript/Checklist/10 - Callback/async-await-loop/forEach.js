const numbers = [1, 2, 3, 4];

async function someFunction(numbers) {
  numbers.forEach(async (number) => {
    const res = await someAPICall(number);
    console.log("--->", res);
  });
}

function someAPICall(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("number: " + number);
    }, 1000 * number); // 1000 * number
  });
}

someFunction(numbers);