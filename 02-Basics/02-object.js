// singleton : creating object from constructor is called singleton mean ya apni trha ka sirf aik hi object h is jesa or ni h so it mean if we made object from literals, singleton not made but object created from constructor than singoltons made [object.create] this is constructor method of object creating or isi ky ander hi singelton bnta h

//object declerations methods 1) object literals and 2)constructor  by both ways object created but differ is singleton only

// object literals

//This is a declearation of symbole data type
const mySym = Symbol("key1");

// [object is key and value pair] the need of object is that when in array we access value through only indexing of array but in object we give keys to values which give us better approch to access easly by understaing the key of our desire value
const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1", // declaration of symbole in object
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// method of accessing objects

console.log(JsUser.email); //by this we get value
console.log(JsUser["email"]); // by this we get value too
console.log(JsUser["full name"]); //  if key name is in string and in this form we did not access it by {.full name} this not work in this form we use this method of accessing values

console.log(JsUser[mySym]); // accessing of symbole

JsUser.email = "hitesh@chatgpt.com"; //by this method we overwrite or change value of email
Object.freeze(JsUser); // by this object could not be changed by any one after this method
JsUser.email = "hitesh@microsoft.com"; // value not updated and also error not comes but value should not be updated after freeze
console.log(JsUser);

// we also add fuction in object too
JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // jb b hm same object ko referance krty hn to hm (this) use krty hn or this ky sath jesy hi dote lgaty hn aesy (this.) to jo b hamara object h us ky ander jitni b properties hn wo is mn mil jati h to hamean name chyea to hm this.name likh dean gy
};

console.log(JsUser.greeting); //by this fuction reference come and function not exicute
console.log(JsUser.greeting()); // by this function exicute and output is : Hello JS user
console.log(JsUser.greetingTwo()); //output is : Hello JS user , Hitesh

// +++++ 2nd method of declering objects +++++++++

const tinderUser1 = new Object(); // object declarition through constructor and this [Singleton] Object

console.log(tinderUser1); // output is empty object : {}

const tinderUser = {}; // this is also object but it [Non-Singleton] Object

//adding values in empty object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // output : {id:"123abc" , name:"Sammy" , isLoggedIn : false}

//Now declear object inside an object
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname); // output : hitesh

//objects metods
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }//output : {{ 1: "a", 2: "b" },{ 3: "a", 4: "b" }}

// const obj3 = Object.assign({}, obj1, obj2, obj4)// output : { 1: "a", 2: "b",3: "a", 4: "b",  5: "a", 6: "b" } and {} is use which denoted this is target object and add values in this target

//The above concept of concatnation is rarely used but this SPREAD concept used which is used in array same as here in object too
const obj3 = { ...obj1, ...obj2 }; // this is spreed method
console.log(obj3); //the output is: { 1: "a", 2: "b",3: "a", 4: "b"}

//when values comes from databases then the data mostly comes in the form of array
const users = [
  {
    id: 1,
    email: "h1@gmail.com",
  },
  {
    id: 2,
    email: "h2@gmail.com",
  },
  {
    id: 3,
    email: "h3@gmail.com",
  },
];

users[1].email; // in this we access users[1] which access that in users array at 1 index the object is and now get the email of an object then we use dot notation for accessing email

//come back again tinderuser which declear at above at 53 line

console.log(tinderUser); // output : {id:"123abc" , name:"Sammy" , isLoggedIn : false}

console.log(Object.keys(tinderUser));
// output : ['id' , 'name', 'isLoggedIn'] but notest that this will return an array of key of an object

console.log(Object.values(tinderUser));
// output : ['123abc' , 'Sammy', false]  this will return an array of value of an object

console.log(Object.entries(tinderUser)); // in this array inside an array
//output : [['id' , '123abc'],['name','sammy'],['isLoggedIn', false]] but this concept used very rear

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // this tell us that the object have property like isLoggedIn the answer is true
console.log(tinderUser.hasOwnProperty("isLogged")); // the output is : false

//++++++++++++++++++++++++++++++++++++++++++++++++

//++++ Object de-structure +++++++

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course; // is mn hm object ki value ko destructure kr rhy hn mean hm bar bar course.courseInstructor ki bjy instructor use kr deaty hn or value mil jati h yahi h destructhering

// console.log(courseInstructor);// this also return same value{hitesh}
console.log(instructor); // this also return same value{hitesh}

// this is api in  jason formate and jason is also in the object form but in jason we give key and values both in strings
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//some time api comes in array form too
[{}, {}, {}];

//Note : All apies are jason formate
