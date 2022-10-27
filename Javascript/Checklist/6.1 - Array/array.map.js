/*
    Array.map()
    - return new array
*/

const users = [
  {
    id: 1,
    name: "Quang",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Smith",
  },
  {
    id: 4,
    name: "Ruby",
  },
];

// Demo
const newUsers = users.map((user, index) => {
  return { ...user, age: 22 };
});

console.log(newUsers);

// Example: 

function userHandler(user, index, originUsers) {
    return {
        id: user.id,
        name: user.name,
        index: index,
        originUsers: originUsers
    }
}

var myUsers = users.map(userHandler);

console.log(myUsers);

