// for of loop

// ["", "", ""] array having string elements
// [{}, {}, {}] array having objects as an elements

//Basic syntex of for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //console.log(num);
}

//Forof loop on stringss
const greetings = "Hello world!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

//maps

//what are maps in js

// Maps are the data types in js these are also similer to array
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();
map.set("IN", "India"); // setting value in maps throought key and values
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // not repeat values in maps so maps are unique values

console.log(map);

// using forof loop in maps

for (const [key, value] of map) {
  // we use [] for access key and values of map
  // console.log(key, ':-', value);
}

//using forof loop on objects

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
// this will give an error that : object is not itterable
//so we donot use forof loop on object
