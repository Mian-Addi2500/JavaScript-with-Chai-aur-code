//Prototype

//Can we add bydefault property(created by yourself ) in any sting or array etc
let myName = "adil       "; //if we want execet value of lenght 1st we call trim function and then call length property function which is perfect but we want to create our propert which calculate exect data in single call can  we do it?? lets explore with example

//note the string problem solve in last of the file

//create own property of object

let myHero = ["thor", "ironman"]; // creat an array
let heroPower = {
  // creat an object with inside function
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
//For get emplements all created properties on all thing(array , string etc) we access top level haracky mean Object we know we directly access object so let do it!

Object.prototype.adil = function () {
  // create property
  console.log("adil is present in all objects");
};
myHero.adil(); //array used our property
heroPower.adil(); // this mean in object property injected

// +++++++++++++++++++++++++++++++++++++++++++++++++

//Now an other Question comes that if we inject property in object it work on all things But if we want to Inject property directly to Array OR String then Object can use that property ? Let Explore
Array.prototype.heyAdil = function () {
  console.log("hey Adil");
};
myHero.heyAdil(); // array access it easily
//heroPower.heyAdil(); // But Object Do not access and hrough an error

// Note: Prove That if we add property to array only then only array can access this property not object not string and not function can access it but if we give it ti perent directly mean OBJECT then all can use it

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// @@@@@@@@@@@@@@@@ INHERETENSE @@@@@@@@@@@@@@@@@@@@@@@@@

// Inheretense means get all propertis of 1 object to an other object same as it is called inheretense
//now explore inherentense

//[OLD SYNTAX]

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, //this is inheretense this mean TASupport get his own properties but also Get property of TeachingSupport tooo
};

Teacher.__proto__ = User; //Same here Teacher get/ access all properties of User throgh inheretense

// [NEW SYNTEX]

//In New syntex we directly access Object and add prototypel inheretense directly
Object.setPrototypeOf(TASupport, Teacher); //1st arrgument(TASupport) get all data of 2nd arrgument(Teacher)

// +++++++++++++++++++++++++++++++++++++++++++++++++

//1st string problm sloution
let myName1 = "adil       ";
String.prototype.trueLength = function () {
  // adding property to string
  console.log(`${this}`); //This we give crunt context value
  console.log(`The True lengthis : ${this.trim().length}`);
};
myName1.trueLength(); //in myName1 the this value (crrunt context) is adil
"Mian".trueLength();
"Zono Mian".trueLength();
