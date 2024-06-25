const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//How to detecet array is empty or not

if (userEmail.length === 0) {
  console.log("Array is empty");
}

//How to dectet object is empty or not

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  // converting object to array and then check length of it
  console.log("Object is empty");
}

//vip equilty comprision of values

// false == 0 //=> true
// false == ''// => true
// 0 == '' //=> true

// Nullish Coalescing Operator (??): null / undefined

let val1;
// val1 = 5 ?? 10 //=> 5
// val1 = null ?? 10 //=>10 this show agr db sy null aa rha h to dosri  value dy do
// val1 = undefined ?? 15 // => 15
val1 = null ?? 10 ?? 20; // => 10

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
