// Cách 2: Sử dụng flattenDeep - lodash libary

var _ = require("lodash");

function numberOfItems(arr, item) {
  // Write the code that goes here
  let count = 0;
  const newArr = _.flattenDeep(arr);
  newArr.forEach((value) => {
    if (value === item) {
      count++;
    }
  });

  return count;
}

var arr = [
  25,
  "apple",
  ["banana", "strawberry", "apple", 25, ["apple", 25, [25]]],
  // { name: "apple", value: 25 }, // khi sử dụng flatten (chỉ làm phẳng mảng)
  25,
];

console.log("Result 25: ", numberOfItems(arr, 25));
console.log("Result apple: ", numberOfItems(arr, "apple"));
