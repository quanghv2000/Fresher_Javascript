/*
    writable
    - true if the value associated (được liên kết) with the property may be changed with an assignment operator. 
    - Defaults to false.
    - Cannot re-assign value when writable of property = false
    - readonly
*/
// example

var writable = {
    number: 40,
};
  
  Object.defineProperty(writable, "number", {
    value: 37,
    writable: false,
  });
  
  console.log("writable.number before: ", writable.number); // 37
  writable.number = 100;
  console.log("writable.number after: ", writable.number); // 37
  
  // => Cannot re-assign value when writable of property = false
  Object.defineProperty(writable, "age", {
    value: 22,
  });