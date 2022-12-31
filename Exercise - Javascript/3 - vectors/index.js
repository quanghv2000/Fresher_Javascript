// Tính độ dài của vector
function lengthOfVector(vector) {
  let [x, y, z] = vector;
  return Math.sqrt(x * x + y * y + z * z);
}

function findShortest(vectors) {
  // coi vector đầu tiên của mảng là vector ngắn nhất
  let vectorShortest = vectors[0]; // lấy vector đầu tiên của mảng
  let minLength = lengthOfVector(vectors[0]); // lấy độ dài vector đầu tiên của mảng 
  vectors.forEach((vector) => {
    let vectorLength = lengthOfVector(vector); // lấy độ dài của từng vector
    if (vectorLength <= minLength) {
      // gán lại minLength và vectorShortest từ vector <=
      minLength = vectorLength;
      vectorShortest = vector;
    }
  });

  return vectorShortest; // trả về vector ngắn nhât
}

var vectors = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
  [0, 0, 1], // min length
  [1, 1, 0],
  [1, 1, 1],
];
var shortest = findShortest(vectors);
console.log(shortest);
