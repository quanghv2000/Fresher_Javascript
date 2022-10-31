/*
    Closure Function
    - Hàm đóng 
    - Note: Mỗi một function khi được tạo ra => Tạo ra một phạm vi mới => có thể truy cập những biến bên ngoài phạm vi 
    - Ko bị ảnh hương bởi GC: Garbage Collection: Releasing memory: Delete these values do not use
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

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter(); // increase() được tạo ra = counter2

console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3

// Ứng dụng: biểu diễn tính private trong OOP

function carsManagement() {
    // (Nếu khai báo cars ngoài phạm vi function carsManagement() => sẽ lỗi khi dòng 49 được thực thi - cars = "not array")
    let cars = []; // private cars

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

cars = "not array";

const myCarsManagement = carsManagement();
console.log(myCarsManagement); // []

myCarsManagement.add("BMW");
myCarsManagement.add("Honda");
myCarsManagement.add("Winner X"); []
myCarsManagement.delete(0);
myCarsManagement.show();