//++++++++ OBJECT LITERALS +++++++++
//object literlar mean this is literlery an object
//object literler is the collection of properties(varibles) and methods
const user = {
  // this is an object literter
  // these are properties which are access by (.) notation
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  //these are methods in objects which are access by (.) notation too

  getUserDetails: function () {
    // console.log("Got user details from database");

    // (this) is used to telling geting value of same cotext mean get username from the same object where function deacleared ,therefore we use {This} key word

    console.log(`Username: ${this.username}`); //use (this) to get username from same object where function decleard without useing (this) we don't get or access username directly in function deu to executation context senarew
    console.log(this); // if we access (this) it show our complete current context of an object mean jitna kuch is object mn rakha gya tha wo sub aik sath memory mn raakha gya h or is (this)ko sub ka pta h
  },
};
console.log(user.username);
console.log(user.getUserDetails());

//++++++++ constructor functions  ++++++++

//[Constructor functions allow you to create multiple instances with object literals (New) keyword is used to create new instances and does not affect old values]

const promisOne = new Promise(); //(new) is actually constructor function
const date = new Date();

/************************************************ */

/*Understanding object values and access it with 'THIS' keyword in JavaScript
[Values and variables are accessed using dot notation in objects
Returning 'this' enables access to complete object values]*/

function User(username, loginCount, isLoggedIn) {
  this.username = username; //lefthandside username is variable and other is a value which passed in function
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; //by this step we pass on object and now play with this by easily accesing its all values of object
}

/******************** */

/*Understanding the concept of constructor function in JavaScript
[Constructor function provides a new instance every time, allowing manipulation without affecting the original data.
Overwriting values in constructor function can lead to potential problems in the code.]*/

const userOne = User("adil", 12, true);
const usertwo = User("mian", 15, false); //when we used this method by calling fuctions directly without (new) keyword these values should be overright orignal value which is not good thing bcz we don't want to overwright our data
console.log(userOne);
console.log(usertwo);
//for this to avoid overrighting we should be use constrector function mean (new) keyword which don't effect on orignal value
const userthree = new User("zono", 14, true);
const userfour = new User("addi", 16, false);
console.log(userthree.constructor); //constructor is refrence to your own(means refrence to the above User function)
console.log(userfour);

/*+++++ V.V.V.IMP Notes About [NEW keyword]/Constructor function +++++


1)When we use NEW keyword 1st of all any empty object {} created which is called instance

2)constructor function called due to NEW Keyword and this paked all arguments in it and give to you

3) In (This) keyword all arrguments(mean variabls ) are injected in (this )key word

4)In this step we gets them in function 




*/
