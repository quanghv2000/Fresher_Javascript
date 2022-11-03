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
  return course;
};

const myCourse = courses.myMap(callbackFunc);

console.log(myCourse)