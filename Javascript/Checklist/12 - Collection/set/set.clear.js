/*
    Set.clear()
    - Removes all items from a Set
*/

const set = new Set();
set.add(1);
set.add('foo');

console.log(set.size, set); // 2

set.clear();

console.log(set.size, set); // 0