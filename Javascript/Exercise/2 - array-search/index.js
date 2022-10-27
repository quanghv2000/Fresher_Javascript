/*
  Cách 1: khai báo count là biến global:
  - (Mỗi lần sử dụng hàm numberOfItem lại phải gán lại biến count = 0 -- dòng 33)
*/

let count = 0;

function numberOfItems(arr, item) {
  // Write the code that goes here
  for (var i in arr) {
    var itemInArr = arr[i];
    if (typeof itemInArr !== "object") {
      if (itemInArr === item) {
        count++;
      }
    } else {
      numberOfItems(itemInArr, item);
    }
  }
  
  return count;
}

var arr = [
  25,
  "apple",
  ["banana", "strawberry", "apple", 25, ["apple", 25, [25], ["apple"]]],
  { name: "apple", value: 25, arr: [25, "apple", 25, {name: "apple", value: 25}] },
  25,
];

console.log("Result 25: ", numberOfItems(arr, 25));
count = 0;
console.log("Result apple: ", numberOfItems(arr, "apple"));
