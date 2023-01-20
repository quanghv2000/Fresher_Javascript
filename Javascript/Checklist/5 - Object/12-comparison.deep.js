/*
    Deep comparison (equality): So sánh sâu
    - The deep equality is similar to the shallow equality, but with one difference. 
    During the shallow check, if the compared properties are objects, 
    a recursive shallow equality check is performed on these nested objects.
*/

// Demo: Deep comparison (equality)

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);

    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }

    // if (areObjects) {
    //     if (!deepEqual(val1, val2)) {
    //         return false;
    //     }
    // } else {
    //     if (val1 !== val2) {
    //         return false;
    //     }
    // }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}

const hero1 = {
  name: 'Batman',
  address: {
    id: 1,
    city: 'Gotham',
    childObj: {
      value: 5,
      contact: {
        phone: '0987654321',
      },
    },
  },
  //   getName: function () {
  //     return this.name;
  //   },
};
const hero2 = {
  name: 'Batman',
  address: {
    id: 1,
    city: 'Gotham',
    childObj: {
      value: 5,
      contact: {
        phone: '0987654321',
      },
    },
  },
  //   getName: function () {
  //     return this.name;
  //   },
};

console.log(deepEqual(hero1, hero2)); // => true

// if both of 2 object contain method => false
