// 5. Array.every()

Array.prototype.every2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index], index, this)) {
                return false
            };
        }
    }

    return true;
}

const courses = [
    {
        id: 1,
        name: "Javascript",
        isActive: true,
    },
    {
        id: 1,
        name: "Java",
        isActive: false,
    },
    {
        id: 1,
        name: "C#",
        isActive: true,
    },
]

var result = courses.every2(function (course, index) {
    return course.isActive;
}) 

console.log(result); // false