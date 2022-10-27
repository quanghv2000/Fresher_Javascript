// Function constructor

function User(fullName, age, avatar) {
    this.fullName = fullName;
    this.age = age;
    this.avatar = avatar;
    this.getName = function() {
        return this.fullName;
    }
}

var author = new User("Quang", 22, "avatar");
var user = new User("John", 21, "avatar");

user.comment = "my comment";
author.title = "Title";

console.log("author: ", author.getName());
console.log("user: ", user.getName());