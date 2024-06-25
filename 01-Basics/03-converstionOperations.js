let score = "hitesh";

//console.log(typeof score);  //output : string
//console.log(typeof(score));

//  ==>> convertion of string to number  <====

let valueInNumber = Number(score);
//console.log(typeof valueInNumber); //output : number
//console.log(valueInNumber);

//==>> conversion of string to number Notes <====

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// ===> Conversion of string to boolean <====

let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn); //output : true

//==>> conversion of string to boolean Notes <====

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// ===> Conversion of number to string <====

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber); //output : string

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue); //output : -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3); //output : hello hitesh

// console.log("1" + 2); //output : 12
// console.log(1 + "2"); //output : 12
// console.log("1" + 2 + 2);//output : 122
// console.log(1 + 2 + "2"); //output : 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //output : 1
// console.log(+""); //output : 0 

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
