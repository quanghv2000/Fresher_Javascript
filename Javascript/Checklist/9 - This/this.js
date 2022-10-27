/*
    This Keyword:
    - In javascript, the "this" keyword refers (đề cập) to an object
    - This is not a variable, it is a keyword. Cannot change the value of this
    - Chỉ có 2 loại context đối với "this" là object chứa method được gọi và global
*/

// 1. This in a Method:

console.log(this); // {} | browser: window

function myFunction() {
  return this;
}

console.log(myFunction()); // context

const user = {
    firstName: "Hà Văn",
    lastName: "Quang",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(user.getFullName());