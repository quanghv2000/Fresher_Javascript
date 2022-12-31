/*
    Cách 2: Truyền thêm count để tiếp tục duyệt mảng ở vị trí count
    (không phải duyệt lại mảng từ đầu)
*/

function filterNumbersFromArray(arr, count) {
  // Write the code that goes here
  var arrLength = arr.length;
  for (var i = count; i < arrLength; i++) {
    // nếu arr[i] không phải number
    if (!(typeof arr[i] === "number")) {
      arr.splice(i, 1); // xóa array[i]
      count = i; // đánh dấu mốc vị trí đã duyệt qua: gán count = i;
      filterNumbersFromArray(arr, count); // tiếp tục duyệt từ vị trí đã đánh dấu mốc
    }
  }
}

var arr = [1, "a", "b", 2, "c", 3, "d", 4, 5, "e", "f", "g", 6];
filterNumbersFromArray(arr, 0);
// At this point, arr should have been modified in place
// and contain only 1 and 2.
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
