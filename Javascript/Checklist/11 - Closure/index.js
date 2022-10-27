/*
    Closure
*/

function createCounter() {
  let counter = 0;

  function increase() {
    return ++counter;
  }

  return increase;
}

const counter1 = createCounter(); // tạo ra 1 phạm vi createCounter()

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

/*
    Ứng dụng:
    - Viết code ngắn gọn hơn
    - Biểu diễn, ứng dụng tính private trong OOP
*/

// 1. Viết code ngắn gọn hơn 
console.log('[Info]: message info1');
console.log('[Info]: message info2');
console.log('[Error]: message error1');
console.log('[Error]: message error2');
console.log('[Error]: message error3');

function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}]: ${message}`);
    }

    return logger;
}

// ========= Info =========
console.log("============== Info ==============")

const infoLogger = createLogger('Info');
infoLogger('Đang xác minh email...');
infoLogger('Xác minh thành công...');
infoLogger('Đang gửi mail...');
infoLogger('Gửi mail thành công...');

// ========= Error =========
console.log("============== Error ==============")
const errorLogger = createLogger('Error');
errorLogger('Email không tồn tại...');
errorLogger('Gửi mail thất bại...')

// 2. Biểu diễn, ứng dụng tính private trong OOP
// let car = []
console.log('++++++++++++++ Car Management +++++++++++++')
function carManage() {
    const cars = [];

    return {
        add(car) {
            cars.push(car);
        },
        show() {
            console.log(cars);
        }
    }
}

const myApp = carManage();

myApp.add('BMW');
myApp.add('Porsche');
myApp.add('SUV');

myApp.show();

/*
    Lưu ý:
    - Biến được tham chiếu trong clouser sẽ không được xóa khỏi bộ nhớ 
    khi hàm cha thực hiện xong
*/
