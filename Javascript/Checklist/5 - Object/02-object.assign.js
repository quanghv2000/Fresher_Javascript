/*
    Object.assign()
    - The Object.assign() method copies all enumerable own properties from one 
    or more source objects to a target object. 
    - It returns the modified target object.
*/

// 1. Object.assign() example:
var student = {
  name: "Ha Van Quang",
  age: 22,
  contact: {
    email: "email",
  },
};

const studentAssigned = Object.assign({}, student);

console.log("studentAssigned: ", studentAssigned);
/*
    studentAssigned:  {
    name: 'Ha Van Quang',
    age: 22,
    contact: { 
        email: 'email' 
        }
    }
*/

// 2. Properties overwritten
const sourceObj = {
  id: 1,
  name: "Quang",
  age: 22,
};

const targetObj = Object.assign({ name: "John" }, sourceObj);

console.log("targetObj: ", targetObj);
// { name: 'Quang', id: 1, age: 22 } => name overwritten

// 3. Deep copy with Object.assign()
const user = {
  id: 1,
  name: "Quang",
  status: "old user",
};

const userCopied = Object.assign({}, user);
userCopied.status = "new user";

console.log("user: ", user); // user:  { id: 1, name: 'Quang', status: 'old user' }
console.log("userCopied: ", userCopied); // userCopied:  { id: 1, name: 'Quang', status: 'new user' }

// 4. Warning for Deep Clone
const myInfo = {
  name: "Quang",
  contact: {
    email: "old email",
  },
};

const myInfoCopied = Object.assign({}, myInfo);
myInfoCopied.contact.email = "new email";

console.log(myInfo.contact.email); // new email
console.log(myInfoCopied.contact.email); // new email

// 5. Mergings objects

const o1 = { a: 1, b: 2 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj1 = Object.assign(o1, o2, o3);
console.log(obj1); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.

// 6. Merging objects with same properties

const o4 = { a: 1, b: 1, c: 1 };
const o5 = { b: 2, c: 2 };
const o6 = { c: 3 };

const obj2 = Object.assign({}, o4, o5, o6);
console.log(obj2); // { a: 1, b: 2, c: 3 }
