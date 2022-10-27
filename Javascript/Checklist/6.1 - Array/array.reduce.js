/*
    Array.reduce()
    - Return về 1 giá trị duy nhất
    - Nhận 2 đối số truyền vào: 
        1. function() {}
        2. initialValue: giá trị khởi tạo
*/

var users = [
  {
    id: 1,
    name: "Quang",
    balance: 324,
  },
  {
    id: 1,
    name: "John",
    balance: 430,
  },
  {
    id: 1,
    name: "Smith",
    balance: 134,
  },
];

// Demo
const totalBalance = users.reduce((totalBalance, user) => {
  return totalBalance + user.balance;
}, 0);

console.log("totalBalance: ", totalBalance); // 888

function balanceHandler(accumulator, currentValue, currentIndex, originArray) {
  // 4 tham số reduce sẽ trả về
  // console.log("accumulator: ", accumulator);
  // console.log("currentValue: ", currentValue);
  // console.log("currentIndex: ", currentIndex);
  // console.log("originArray: ", originArray);
  console.table({
    index: currentIndex,
    "biến lưu trữ: ": accumulator,
    "current balance: ": currentValue.balance,
  });
  console.log(
    "lượt",
    currentIndex + 1 + ": " + accumulator + " + " + currentValue.balance + " = ",
    accumulator + currentValue.balance
  );

  return accumulator + currentValue.balance;
}

const totalBalance1 = users.reduce(balanceHandler, 0); // nhận vào 2 tham số function và initialValue

console.log("totalBalance1: ", totalBalance1);
