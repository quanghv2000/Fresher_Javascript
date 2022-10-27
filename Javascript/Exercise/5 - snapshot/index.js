class Snapshot {
  constructor(array) {
    // this.array = array;
    this.array = [...array]; // tham chiếu đến 1 mảng mới (arr2)
  }

  restore() {
    // return this.array;
    return [...this.array]; // tiếp tục lưu arr2 vào vùng nhớ khác 
  }
}

var array = [1, 2];
var snap = new Snapshot(array); // this reference window
console.log("snap check: ", snap);
array[0] = 3;
console.log("snap check: ", snap);
array = snap.restore();
console.log(array.join()); //It should log "1,2"
array.push(4);
console.log("snap check: ", snap);
array = snap.restore();
console.log(array.join()); //It should log "1,2"
