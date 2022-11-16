/* 
  - Array.prototype.myMap
*/

Array.prototype.myMap = function (callbackFunc) {
  const result = [];
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      result.push(callbackFunc(this[index], index, this));
    }
  }

  return result;
};

const courses = [
  {
    name: "Java",
    coin: 900,
  },
  {
    name: "Javascript",
    coin: 990,
  },
  {
    name: "PHP",
    coin: 890,
  },
];

const callbackFunc = (course, index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ course, index });
    }, 2000);
  });
};

const myCourse = courses.myMap(callbackFunc);

console.log(myCourse); // [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]

const myResult = async () => {
  const result = await Promise.all(myCourse);

  console.log("Result: ", result);
};

myResult();
