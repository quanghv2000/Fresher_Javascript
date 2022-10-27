// 1. Manual comparison - Thủ công

function isObjectEqual(obj1, obj2) {
    return obj1.name === obj2.name && obj1.age === obj2.age;
}

var user1 = {
    name: "Quang",
    age: 22,
    school: 'FPT U'
}

var user2 = {
    name: "Quang",
    age: 22,
    school: 'FPT U'
}

var user3 = {
    name: "John",
    age: 22
}

console.log('----- Manual Comparision -----')
console.log(isObjectEqual(user1, user2)); // true
console.log(isObjectEqual(user1, user3)); // false

// 2. Shallow Compare

function isShallowEqual(obj1, obj2) {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if (key1.length !== key2.length) {
        return false;
    }

    for (const key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

console.log('----- Shallow Comparision -----')
console.log(isShallowEqual(user1, user2)); // true
console.log(isShallowEqual(user1, user3)); // false


// 3. Deep Compare

function isObject(object) {
    return object != null && typeof object === 'object';
}

var user4 = {
    name: "Quang",
    age: 22,
    school: 'FPT U',
    class: {
        name: "IS1411",
        school: {
            name: 'FPT U'
        }
    }
}

var user5 = {
    name: "Quang",
    age: 22,
    school: 'FPT U',
    class: {
        name: "IS1411",
        school: {
            name: 'FPT U'
        }
    }
}

var user6 = {
    name: "Quang",
    age: 22,
    school: 'FPT U',
    class: {
        name: "IS1411",
        school: {
            name: 'Fsoft'
        }
    }
}


function isDeepEqual(obj1, obj2) {

    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if (key1.length !== key2.length) {
        return false;
    }

    for (const key of key1) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        const areObjects = isObject(value1) && isObject(value2);

        if (areObjects && !isDeepEqual(value1, value2) || !areObjects && value1 !== value2) {
            return false;
        }
    }

    return true;
}

console.log('----- Deep Comparision -----')
console.log(isDeepEqual(user4, user5)); // true
console.log(isDeepEqual(user4, user6)); // false
console.log(isShallowEqual(user4, user5)); // false