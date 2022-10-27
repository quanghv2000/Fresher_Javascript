/*
    This - Apply
*/

const teacher = {
    firstName: "Hà",
    lastName: "Quang"
}

function greet(greeting) {
    return `${greeting} ${this.firstName} ${this.lastName}`
}

let message = greet.apply(teacher, ["Hello!"]);

console.log(message);