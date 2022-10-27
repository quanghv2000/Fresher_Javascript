/*
    Object.freeze()
    - The Object.freeze() method freezes an object.
    - A frozen object can no longer be changed;
    - cannot add new properties
    - cannot removed, prevents changing the enumerability, configurability, or writability of existing properties,
*/

// Demo: Object.freeze()

let user = {
  name: "Quang",
  age: 22,
  address: "Ha Noi",
  contact: {
    email: "old email", // connect
  },
};
console.log("----- before freeze -----", user);
/*
    {
        name: 'Quang',
        age: 22,
        address: 'Ha Noi',
        contact: { email: 'old email' }
    }
*/

Object.freeze(user);

user.class = {
  id: 1020,
  name: "GD1403",
};

user.company = "fsoft";
user.age = 20;
delete user.address;
delete user.contact;

// with child object => freeze not working
user.contact.email = "new email";
user.contact.phone = "0123456789";

// defineProperty
// Object.defineProperty(user, "name", {
//   writable: false,
//   enumerable: false,
// });
//  => Error: Cannot redefine property: name

console.log("----- after freeze -----", user);
/*
    {
        name: 'Quang',
        age: 22,
        address: 'Ha Noi',
        contact: { email: 'new email', phone: '0123456789' }
    }
*/
