/*
    Set.add()
    - 	Appends a new item to a Set
*/

const set = new Set();

set.add(42);
set.add(42);
set.add(13);

for (const item of set) {
  console.log(item); // 42, 13
}
