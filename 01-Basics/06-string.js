const name = "adil";
const age = 25;
//concatination in string
console.log(name + age + " mailsi"); // this is outdated method
console.log(
  `Hello my name is ${name.toUpperCase()} and my repo count is ${age}`
); //use backtecks this is modren day concept {this is also call string interpalution} and in this also use varibales directely by ${} and also do some methods too directly like  ${name.toUpperCase()}

// 2nd way of string declration

const myStr = new String("Mian Bhai"); //new key world denote an object
//NOW String act as object and its values are be come key value pair so to access it
console.log(myStr[0]); // by this get index and value

//Method of String object

console.log(myStr.length); //give string length start from 1 to uppword
console.log(myStr.__proto__); // show prototype of mystr
console.log(myStr.toUpperCase()); //convert myStr to uppercase
console.log(myStr.charAt("2")); // show at  2 index which character placed and index start from 0 to upword
console.log(myStr.indexOf("i")); // show i at on what position of myStr
const newStr = myStr.substring("0", "4"); //divid to substring rang but orignal string not changed
console.log(newStr);

const anotherNewStr = myStr.slice("0", "4"); //this should slice the string
const anotherNewStr2 = myStr.slice("-8", "4"); //this should slice the string by passing -ve value and it strat from end of the string
const anotherNewStr3 = "     adil    ";
console.log(anotherNewStr3.trim()); //to avoid extra spaces
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-")); //replace string value
console.log(url.includes("hitesh")); //is string containe hitesh ? it return true
console.log(url.includes("sundar")); //return false
const gameName = new String("hitesh-hc-com");
console.log(gameName.split("-")); // splite string into ARRAY on the bases of - in this method
