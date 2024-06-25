// For In Loops

//declearing an object
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

//using forIn loop to ittreate objects

for (const key in myObject) {
  console.log(key); // this will print all keys of an object
  console.log(myObject[key]); // this will print all values of an object
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

//Using forIn loop on arrays

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //console.log(programming[key]);
}

// using for in loop to maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(key);
}
// on maps itteration is not possible
