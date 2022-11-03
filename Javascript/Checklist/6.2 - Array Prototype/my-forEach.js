/* 
  - Array.prototype.myForEach
*/

Array.prototype.myForEach = function (callbackFunc) {
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      callbackFunc(this[index], index, this);
    }
  }
};

const courses = ["Javascript", "PHP", "Ruby"];

courses.myForEach((course, index, originArray) => {
  console.log(course, index, originArray);
});
