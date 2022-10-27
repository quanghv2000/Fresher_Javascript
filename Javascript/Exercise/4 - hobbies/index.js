function findAllHobbyists(hobby, hobbies) {
  let result = []; // tạo 1 mảng lưu kết quả
  // sử dụng Object.entries duyệt qua tất cả properties trong hobbies => lấy ra key, value
  for (const [key, value] of Object.entries(hobbies)) {
    for (var item of value) {
      // nếu item trong mảng value === tham số hobby truyền vào
      if (item === hobby) {
        result.push(key); // => push key vào mảng 
      }
    }
  }
  
  return result;
}

var hobbies = {
  Chad3: ["Puzzles", "Pets", "Drama"],
  Steve: ["Fashion", "Piano", "Reading", "Yoga"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
  Chad2: ["Puzzles", "Pets", "Yoga"],
};

console.log(findAllHobbyists("Yoga", hobbies));
