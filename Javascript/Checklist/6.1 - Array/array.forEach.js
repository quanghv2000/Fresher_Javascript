// /*
//     Array.forEach()
//     - nhận vào 2 đối số - 1. callBack function, 2. thisArg?: any
//     - ko return any value
// */

// Array.prototype.test = "test";

// // ___proto___>forEach2
// Array.prototype.forEach2 = function (callback) {
//   for (var index in this) {
//     console.log(this.hasOwnProperty(index)) // Object.prototype
//     // duyệt qua cả prototype mà được định nghĩa thêm
//     // => check hasOwnProperty (chỉ những element nằm trong mảng not trong ___proto___)
//     if (this.hasOwnProperty(index)) {
//       callback(this[index], index, this);
//     }
//   }
// };

// var courses = ["Javascript", "PHP", "Ruby", "C#"];

// courses.length = 100; // forEach don't care for length of array

// console.log(courses); // Empty 96

// courses.forEach2(function (course, index, originArray) {
//   console.log(course, index, originArray);
// });

// // for(var i = 0; i < courses.length; i++) {
// //     console.log(courses[i]);
// // }


const array = [1,2,3,4,5, [5,6]]
