const _ = require("lodash");

console.log("Lodash Uniq!");

const numbers = [1, 1, 2, 3, 3, 4, 5, 2, 3];

const result = _.uniq(numbers);

console.log(result);

const users = [
    {id: 1, name: "Quang"},
    {id: 2, name: "Smith"},
    {id: 3, name: "Nam"},
    {id: 1, name: "Quang"},
    {id: 2, name: "Smith"},
    {id: 5, name: "John"},
]

const usersUniq = _.uniqBy(users, 'id');
console.log(usersUniq);