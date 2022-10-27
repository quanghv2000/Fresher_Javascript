/*
   Set.entries()
   - Returns all values in a Set as [value, value]
*/

const set = new Set();
set.add(42);
set.add("forty two");

const iterator = set.entries();

for (const entry of iterator) {
  console.log(entry);
}
/*
    [ 42, 42 ]
    [ 'forty two', 'forty two' ]
*/
