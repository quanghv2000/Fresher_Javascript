/* 
    Object.Create()
    - The Object.create() method creates a new object, 
    using an existing object as the prototype of the newly created object.
*/

var user = {
    getFullName: function() {
        return this.lastName + " " + this.firstName;
    }
}

// Using Object.create()
let myInfo = Object.create(user);

console.log("myInfo: ", myInfo); // {}

myInfo.firstName = "Ha Van";
myInfo.lastName = "Quang";

console.log("myInfo.getFullName(): ", myInfo.getFullName()); // Quang Ha Van

const emptyObject = Object.create({});
const nullObject = Object.create(null);

console.log("emptyObject: ", emptyObject); // {}
console.log("nullObject: ", nullObject); // [Object: null prototype] {}

console.log("emptyObject.toString(): ", emptyObject.toString()); // [object Object]
// console.log("nullObject.toString(): ", nullObject.toString()); // Error

// const myObj = {};

// console.log("myObj: ", myObj);

// myObj.name = "Quang"; 

// => Chưa hiểu rõ phần này (tại sao myObj.name = "Quang" gán sau dòng 36 mà dòng 34 vẫn có)