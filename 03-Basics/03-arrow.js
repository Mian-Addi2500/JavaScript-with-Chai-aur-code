// +++++++++++++++++ this method ++++++++++++++++++

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // this will give crunt context(means values of function) of the function
    console.log(this); // this will show crunt context
  },
};

user.welcomeMessage(); // output is : hitesh welcome to website
user.username = "sam"; // now we change crunt conext ( values ) of fuction
user.welcomeMessage(); // output is : sam welcome to website

console.log(this); // output is : {}
/*
VIP Note: in node enviornment (this) give {} empty object but in browser enviornment (this) give a window object  like -> [Window {0: Window, 1: Window, 2: Window, window: Window, self: Window, document: document, name: '', location: Location, …}]
*/

function chai() {
  let username = "hitesh";
  console.log(this.username); // bcz we are in same scope of function then this.username will return (undefine) not (hitesh)
}

chai();

const chai = function () {
  let username = "hitesh";
  console.log(this.username); // bythis method also give as above result of  this.username  is (undefine) not (hitesh)
};

//++++++++++++++++++ ARROW FUNCTION+++++++++++++++++++++++

const chai = () => {
  let username = "hitesh";
  console.log(this.username); // In Arrow fuction  also give as above result of  this.username  is (undefine) not (hitesh)
  console.log(this); // the output is : {} empty object
};

chai();

//Method or syntext of an arrow function

//Basic Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// @@@@@@ Imeplesit Retunr arrow function @@@@ : [is mn hm 1 hi line mn code likhen gy or hm return ni liken gy bcz is mn man lia jata h ky ap value return kr rhy ho automatically]

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )// this is same as above in line # 54 both metheds are prefect
//Note this method is mostly used in REACT JS

const addTwo = (num1, num2) => ({ username: "hitesh" }); // returning object in Imeplesit Return arrow function

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
