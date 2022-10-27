console.log(1); // callstack

setTimeout(() => {
  console.log(2)
},0); // macro

Promise.resolve().then(() => console.log(3)); // micro

console.log(4); // callstack

// 1 => 4 => 3 => 2