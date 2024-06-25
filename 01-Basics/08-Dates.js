// Dates

let myDate = new Date(); // date object / date instance
// console.log(myDate.toString());// converting date to string
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);// date type is object

// declearing a specific date

// let myCreatedDate = new Date(2023, 0, 23)//In js month start from 0(output is [Mon jan 23 2023])
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)//output [1/23/2023 , 5:03:00 AM]
// let myCreatedDate = new Date("2023-01-14")//yy-mm-dd
let myCreatedDate = new Date("01-14-2023"); //mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);// this give long digit 177894567458 which is milli second
// console.log(myCreatedDate.getTime());// this also give mili second value and compare it to get exect time etc
// console.log(Math.floor(Date.now()/1000));// this gives seconds but decemal value comes after division therefor use Math.floor to over come desimal

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // gives month but month start 0 by default there for add 1 bcz user donot confused
console.log(newDate.getDay()); // give day in number and day start from Mon and number satrt for day is 1 not zero but in month start from 0 not 1

// `${newDate.getDay()} and the time `//for example geting full time in string intrplution

//===>VIP Method <=====

//In this method we define object and also define many parameters
newDate.toLocaleString("default", {
  // default mean interlization is default
  weekday: "long",
});
