/* 
  - Array.prototype.myMap
*/

Array.prototype.myMap = function (callbackFunc) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callbackFunc(this[i], i));
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
  return course;
};

const myCourse = courses.myMap(callbackFunc);

console.log(myCourse)