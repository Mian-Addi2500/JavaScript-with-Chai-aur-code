///+++++++ProtoType+++++++++++

//JS having protetypel behaviour mean if you get task to js it work to find solution it go to parent if not found soln go to grand parent if not the go to grand grand parent and so on to get soln if soln not found this process should be end untill when it get NULL . after null we donot go further

//In Js every thing is end of the day is An Object and object end with Null all thing get there own properties but also referance to object to
//i.e with array
// array ----> Object ------> null
//same with string tooo
//String  ----> Object -------> null

// IS Function end of the day is An Object or not ? let Explore it

const multiplyBy5 = function (num) {
  return num * 5;
};

multiplyBy5.power = 2;
console.log(multiplyBy5(5)); //this is simple function result we all know
console.log(multiplyBy5.power); //by this dot(.) consept we understand function is also be object too
console.log(multiplyBy5.prototype);

//By this we Undersatand Function also function too but function also be an object tooo
//same with function tooo in diagram
//Function  ----> Object -------> null

//+++++++++++++++++++++++++++++++++++++++

//Now Move next we say every thing end of the day is Object in Js then in array or string or any other thing we called or access function through DOT . notation so if we want to declear our funcationalty and then access it through DOT. notation Is it possible ? Let Explore!

function createUser(username, score) {
  this.username = username; // if we want variable name same as over function paramenter then confusion come which one is varible decleration and which one is value for this confusion we use (This ) keyword
  this.score = score;
}

//Now Try  to inject my own functionalty in any function
//Inject increment funcationalty in our creatUser function

createUser.prototype.increment = function () {
  this.score++; //use this keyword for jis ny b bolaya h us ki value bhra do current context ka
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25); //use new key word for geting that it tell all aditional properties which comes i.e printMe funcationalty in our case
const tea = createUser("tea", 250);
// now use your created funcationalty
chai.printMe();

// +++++++++ V.I.P Notes +++++++
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
