/*
    Set.delete
    - Removes the specified item from a Set
    - Return Boolean
*/

const set = new Set();
set.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });
console.log(set);

// Delete any point with `x > 10`.
set.forEach((point) => {
  console.log(point);
  if (point.x > 10) {
    set.delete(point);
  }
});

console.log(set.size);
// expected output: 1
