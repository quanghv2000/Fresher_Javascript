/* 
  Object prototype

  - Prototypes are the mechanism(cơ chế) by
  which Javaccript objects inherit(kế thừa) features from one another (is same)
*/

// 1. The prototype chain

/* 
  - The prototype is itself an object, so the prototype will have its own prototype,
  => making prototype chain
*/
// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet(); // Greetings from Madrid

// console.log("myObject.toString(): ", myObject.toString()); // "[object Object]"

// console.log("myObject: ", myObject);

// // console.log(Object.getPrototypeOf(myObject));

// // 2. Shadowing properties (property with same name prototype in an object)
// const myDate = new Date(); // new operator
// console.log("myDate: ", Object.getPrototypeOf(myDate));

// console.log(myDate.getMonth()); // 4

// myDate.getMonth = function () {
//   console.log("this is getMonth method!");
//   // return "value";
// };

// console.log(myDate.getMonth()); // this is getMonth method! && undefined ???

// // 3. Setting a prototype
// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// User.prototype.company = "FPT Software";
// User.prototype.getFullName = function () {
//   return this.lastName + " " + this.firstName;
// }

// const user = new User("Ha Van", "Quang");
// console.log("user: ", user); // user:  User { firstName: 'Ha Van', lastName: 'Quang' }
// console.log(user.company); // FPT Software
// console.log(user.getFullName()); // Quang Ha Van

const number = 10;

console.log(number.prototype)