// 3. Array.filter()

Array.prototype.filter2 = function(callback) {
    var output = [];

    for (var index in this) {
        console.log(this.hasOwnProperty);
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }

    return output;
}

const courses = [
    {
        id: 1,
        name: "Javascript",
        price: 233
    },
    {
        id: 1,
        name: "Javascript",
        price: 435
    },
    {
        id: 1,
        name: "Javascript",
        price: 430
    },
]

const coursesFiltered = courses.find(function(course, index) {
    return course.price > 400;
})

const coursesFiltered2 = courses.filter2(function(course, index) {
    return course.price > 400;
})

console.log(coursesFiltered);

console.log(coursesFiltered2);
