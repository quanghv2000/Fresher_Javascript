/*
    Shallow comparison (equality): So sánh nông
    - During shallow equality check of objects you get the list of properties (using Object.keys()) of both objects,
    then check the properties' values for equality.
*/

// Demo: Shallow comparison (equality)

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

// Case 1: Object is not nested
const hero1 = {
  name: "Batman",
  realName: "Bruce Wayne",
};
const hero2 = {
  name: "Batman",
  realName: "Bruce Wayne",
};
const hero3 = {
  name: "Joker",
};
console.log("hero1 and hero2: ", shallowEqual(hero1, hero2)); // => true
console.log("hero1 and hero3: ", shallowEqual(hero1, hero3)); // => false

// Case 2: Object is nested
const hero5 = {
  name: "Batman",
  address: {
    city: "Gotham",
  },
};
const hero6 = {
  name: "Batman",
  address: {
    city: "Gotham",
  },
};
console.log("hero5 and hero6: ", shallowEqual(hero5, hero6)); // => false

// console.log(Object.entries(hero5));
// console.log(Object.entries(hero6));