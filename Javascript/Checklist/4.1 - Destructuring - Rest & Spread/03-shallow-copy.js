/*
    Shallow copy example
    Original Object, Cloned Object => Referenced Object
*/

const user = {
  id: 1,
  name: 'Quang',
};

const user1 = user;

user.name = 'John';
user1.age = 24;
user.contact = {
  phone: '0986915765',
};

console.log('user: ', user);
console.log('user1: ', user1);

// Shallow copy exam when use spread operator => Object.assign is same too

let person = {
  id: 1,
  name: 'Quang',
  contact: {
    email: 'old',
  },
};

let copiedPerson = { ...person };
copiedPerson.name = 'John';

console.log('contact: ----', copiedPerson['contact']);

copiedPerson.contact.email = 'new email';

// copiedPerson["contact"] = {
//     email: "new email",
// },

console.log('person: ', person);
console.log('copiedPerson: ', copiedPerson);
