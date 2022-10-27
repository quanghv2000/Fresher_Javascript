function sayHello() {
  console.log("Welcome!");
  console.log("to");
  console.log("Loupe");
}

sayHello();

setTimeout(function timeout() {
  console.log("Goodbye!");
}, 3000);

setTimeout(function timeout1() {
  console.log("Goodbye!");
}, 3000);

function sayMyName() {
  console.log("My");
  console.log("name");
  console.log("is");
  console.log("Quang!");
}

sayMyName();

// microtask: promise
// macrotask: setTimeout, setInterval