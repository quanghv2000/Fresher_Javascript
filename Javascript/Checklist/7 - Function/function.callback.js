// Callback function

// 1. Là 1 function
// 2. Được truyền qua dối số
// 3. Được gọi lại (trong hàm nhận đối số)

function myCallback(message) {
  console.log(message);
}

function myFunction(myCallback) {
  const message = "My callback function!";
  myCallback(message);
}

myFunction(myCallback);