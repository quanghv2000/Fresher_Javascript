/*
    Closure Function
    - Hàm đóng 
    - Note: Mỗi một function khi được tạo ra => Tạo ra một phạm vi mới => có thể truy cập những biến bên ngoài phạm vi 
    - Ko bị ảnh hương bởi GC
*/

// Demo
function createCounter() {
    let counter = 0;

    function increase() {
        return ++counter;
    }

    return increase;
}

const counter1 = createCounter(); // increase() được tạo ra = counter1

{
    counter = 1;
    // function increase(
    //     return 1
    // ) {

    }
    return increase
}

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter(); // increase() được tạo ra = counter1

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

// Ứng dụng: biểu diễn tính private trong OOP
let cars = []; // private cars

function carsManagement() {
    // return methods public 
    return {
        add(car) {
            cars.push(car);
        },
        show() {
            console.log(cars);
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
}

car = "not array";

const myCarsManagement = carsManagement();
console.log(myCarsManagement); // []

myCarsManagement.add("BMW");
myCarsManagement.add("Honda");
myCarsManagement.add("Winner X"); []
myCarsManagement.delete(0);
myCarsManagement.show();