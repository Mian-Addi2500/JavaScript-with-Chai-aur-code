//fuction
//fuction mean we write 10 line or 20 liens or how much you write and paked these lines in one pakeg and used it any where you want

//function declearition
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
// function calling
sayMyName();

//an other function
function addTwo(number1, number2) {
  //number1 and number2 are parameter

  console.log(number1 + number2); // by this value shown in function but it does not return alues
}
const results = addTwo(3, 5); // 3 and 5 are arrguments and output 8

// console.log("Results: ", results);// output : undefine bcz value not return

//using return keyword in function
function addTwoNumbers(number1, number2) {
  return number1 + number2;
  //   console.log('adil'); // after return in fuction no one thing run
}

const result = addTwoNumbers(3, 5); // 3 and 5 are arrguments
// console.log("Result: ", result);

//
function loginUserMessage(username = "sam") {
  // add bydefault username sam if user not enter name the function return username sam
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"));

// made a function in which we do not know how much parameter passed by user for this we made this function and this problem mostly comes in online shoping in that user purchaes many thing we do not know execit no of items

function calculateCartPrice(val1, val2, ...num1) {
  // in this three dots ...num1 is rest operator
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))// the output is [500 , 2000] // rest operator return vaulue of array in this seneriou 200 go to val1 and 400 go to val2 and remaing go to num1 in form of array

//Passing object in function
const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)// in this we give object user to function

//it is not nesserry that only object first declear we can directly declear object in function ecuation
handleObject({
  username: "sam",
  price: 399,
}); // the output is : Username is sam and price is 399

//passing array to function
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));// output is : 400
console.log(returnSecondValue([200, 400, 500, 1000])); // same as we pass object we also pass array to fuction and output is : 400
