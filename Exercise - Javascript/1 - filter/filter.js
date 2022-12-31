// Cách 1:

function filterNumbersFromArray(arr) {
  // Write the code that goes here
  var arrLength = arr.length;
  for (var i = 0; i < arrLength; i++) {
    // nếu arr[i] không phải number
    if (!(typeof arr[i] === "number")) {
      arr.splice(i, 1); // xóa array[i]
      filterNumbersFromArray(arr); // tiếp tục duyệt lại từ đầu mảng
    }
  }
}

var arr = [1, "a", "b", 2, "c", 3, "d", 4, 5, "e", "f", "g", 6];
filterNumbersFromArray(arr);
// At this point, arr should have been modified in place
// and contain only 1 and 2.

console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
