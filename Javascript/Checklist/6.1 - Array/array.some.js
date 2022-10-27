// 4. Array.some()

Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true
            };
        } 
    }

    return false;
}

var courses = [
    {
        id: 1,
        name: "Javascript",
        isFinish: false,
    },
    {
        id: 1,
        name: "Javascript",
        isFinish: true,
    },
    {
        id: 1,
        name: "Javascript",
        isFinish: false,
    }
]

var result = courses.some2(function(course, index) {
    return course.isFinish;
})

console.log(result);