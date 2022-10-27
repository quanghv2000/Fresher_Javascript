console.log("---- Javascript Object ----");

var student = {
    name: "Quang",
    age: 22,
    school: "FPT University",
    rollno: "HE140233"
}

function isObject(object) {
    if (typeof (object) === 'object') {
        return true;
    }

    return false;
}

// 1. Write a JavaScript program to list the properties of a JavaScript object.

function getProperties(object) {
    if (isObject(object)) {
        return Object.keys(object);
    } else {
        return "The parameter passed is not an object";
    }
}

// 2. Write a JavaScript program to delete the rollno property from the following object.

function deleteProperty(object, key) {
    if (isObject(object)) {
        delete object[key];
        return object;
    } else {
        return "The parameter passed is not an object";
    }
}

// 3. Write a JavaScript program to get the length of a JavaScript object.

function getSizeObject(object) {
    if (isObject(object)) {
        return Object.keys(object).length;
    } else {
        return "The parameter passed is not an object";
    }
}

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) 
// of the following books

var books = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    },
];

function getBooksReading(books) {
    booksReading = [];
    for (let book of books) {
        if (book.readingStatus === true) {
            booksReading.push(book);
        }
    }

    return booksReading;
}

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes

function Cylinder(height, diameter) {
    this.height = height;
    this.diameter = diameter;
}

Cylinder.prototype.Volume = function () {
    var radius = this.diameter / 2;
    return this.height * Math.PI * radius * radius;
}

var cylinder = new Cylinder(7, 4);
var volume = cylinder.Volume().toFixed(4);

