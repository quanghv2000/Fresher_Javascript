/*
    5. enumerable
    - true if and only if this property shows up during enumeration (liệt kê) of the properties on the corresponding (tương ứng) object. 
    - Defaults to false.
    => Cannot enumeration (liệt kê) when enumerable = false - ex: Object.keys(), forin
*/

const enumeration = {
    name: "Quang",
    age: 22,
  };
  
  console.log("----- enumeration before: -----");
  console.log("enumeration: ", enumeration)
  for (let item in enumeration) {
    console.log(item);
  } // name, age
  console.log(Object.keys(enumeration));
  
  Object.defineProperty(enumeration, "name", {
    enumerable: false,
  });
  
  console.log("----- enumeration after: -----");
  console.log("enumeration: ", enumeration)
  for (let item in enumeration) {
    console.log(item);
  } // age
  
  console.log(Object.keys(enumeration));
  
  // => Cannot enumeration (liệt kê) when enumerable = false
  