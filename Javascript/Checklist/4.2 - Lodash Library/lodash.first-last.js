const _ = require('lodash');

console.log("Lodash First - Last");

const students = [
    {id: 1, name: "Quang"},
    {id: 2, name: "John"},
    {id: 3, name: "Smith"},
]


// const firstStudent = students[0];
// const lastStudent = students[students.length - 1];

const firstStudent = _.first(students);
const lastStudent = _.last(students);

console.log("First student: ", firstStudent);
console.log("Last student: ", lastStudent);

