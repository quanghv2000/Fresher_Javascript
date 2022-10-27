/*
    This - Bind
*/

this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
    firstName: "Minh",
    lastName: "Thảo",
    getFullName(data1, data2) { 
        console.log(data1, data2)
        return `${this.firstName} ${this.lastName}`
    }
    // getFullName() { 
    //     // console.log(data1, data2)
    //     return `${this.firstName} ${this.lastName}`
    // }
}

const student = {
    firstName: "Hà",
    lastName: "Quang",
}

// case 1:
// console.log(teacher.getFullName());

//case 2:
// const getTeacherName = teacher.getFullName;
// const getTeacherName = teacher.getFullName.bind(teacher);
// console.log(getTeacherName());
const getTeacherName = teacher.getFullName.bind(student, "Not data 1", "Not data 2"); // có thể nhận n đối số

console.log(getTeacherName("Data 1", "Data 2"));