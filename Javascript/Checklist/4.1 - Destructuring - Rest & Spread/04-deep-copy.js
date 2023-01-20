/*
    Deep Copy
    Original Object => Referenced Object
    Cloned Object => Referenced Clone
    - Khi dùng spread operator và object.assign => Deep copy chỉ có thể disconnect trong object có 1 cấp
*/

const a = 5;
let b = a;

b = 6;

console.log(b); // 6
console.log(a); // 5

const user = {
  id: 1,
  name: 'Quang', // disconnect
  contact: {
    email: 'old email', // connect
  },
};

user.contact.email = 'new email';

// Using spread operator
const userCopied = { ...user };
userCopied.contact.email = 'email spread op';
userCopied.name = 'John';

console.log('user: ', user);
console.log('userCopied: ', userCopied);

// Using assign operator
const userAssigned = Object.assign({}, user);

userAssigned.name = 'Smith';
console.log('userAssigned: ', userAssigned);

// Using stringify and parse
const userParsed = JSON.parse(JSON.stringify(user));
userParsed.name = 'Nam';
userParsed.contact.email = 'email parsed';

console.log('userParsed: ', userParsed);

const arrayTest = [1, 2, 3, function abc() {}];
const arrayTestCopy = JSON.parse(JSON.stringify(array1));

console.log(arrayTestCopy);
