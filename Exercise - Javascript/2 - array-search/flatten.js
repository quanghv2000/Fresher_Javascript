// Cách 3: Sử dụng đệ quy viết hàm flattenDeep (làm phẳng mảng rồi đếm)

function flattenDeep(arr) {
  let flattened = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      flattened = [...flattened, ...item]; // [ 25, 'apple', 'banana', 'apple', 25 ] (spread operator)
      //   console.log(flattened.join());
      flattened = [...flattenDeep(flattened)];
      //   console.log(flattened.join());
    } else {
      flattened.push(item); // [25, "apple"]
    }
  }
  return flattened;
}

function numberOfItems(arr, item) {
  // Write the code that goes here
  let count = 0;
  const arrayFlattened = flattenDeep(arr);
  arrayFlattened.forEach((element) => {
    if (element === item) count++;
  });

  return count;
}

var arr = [
  25,
  "apple",
  ["banana", "apple", 25],
  ["banana", "strawberry", "apple", 25, ["apple", 25, [25]]],
  { name: "apple", value: 25 },
  25,
];

console.log(flattenDeep(arr).join());
console.log("Result 25: ", numberOfItems(arr, 25));
count = 0;
console.log("Result apple: ", numberOfItems(arr, "apple"));
