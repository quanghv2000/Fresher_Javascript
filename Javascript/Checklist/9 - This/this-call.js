/*
    This - Call
    // Chỉ đinh this trỏ đến
*/

// 1. - Call là 1 phương thức để gọi hàm
function random() {
  console.log("call random!");
}

random();
random.call(); // call random

// 2. - Gọi hàm và bind this - bind + call

const teacher = {
  firstName: "Minh",
  lastName: "Thu",
};

const me = {
  firstName: "Hà",
  lastName: "Quang",
  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

me.showFullName(); // Hà Quang
me.showFullName.call(); // undefined undefined (this - window)
me.showFullName.call(teacher); // Minh Thu

this.name = "John"

function foo() {
  console.log(this.name);
}

foo.call() // John | 'use strict' => Error