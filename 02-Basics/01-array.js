// ====>Array<======

//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

//Notes
/*
1)JavaScript arrays are resizable and can contain a mix of different data  types. (When those characteristics are undesirable, use typed arrays instead.)
2)JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
3)JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
4)JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//What is shallow cope?
//A shallow copy of an object is a copy whose properties share the same references(mean that jo be mn change kroun ga orignal array mn b change ho ga jesy heap mn hota thaa) 
//What is deep copy?
//A deep copy of an object is a copy whose properties do not share the same references(mean that jo be mn change kroun ga orignal array mn  change ni ho ga blky us ki copy bny gi or us mn chnging hon gi jo b mn kroun ga to jesy stack mn hora tha)
*/
const myArray = [0, 1, 2, 3, 4, 5, true, "adil"]; // array element should be defer data type or same it depends you

//1st method of creating array
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
//2nd method
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);

// @@@@@ Array methods @@@@@@@

myArr.push(6); // add value 6 at end of array now myArr is [0,1,2,3,4,5,6]
myArr.push(7); //add 7 after 6 [0,1,2,3,4,5,6,7]
myArr.pop(); //remove last value of array [0,1,2,3,4,5,6]

myArr.unshift(9); //add value at start [9,0,1,2,3,4,5,6,7] but this is mostly not used in big array bcz when value add at strat the other value index changes which is not good and loaded paractes

myArr.shift(); // remove value from start

console.log(myArr.includes(9)); //check weheter 9 include in myArr or not the answer return in boolen (true/false) this example answer is false

console.log(myArr.indexOf(3)); //check at what index value liess in our example of myArr 3 liess at 3rd index

console.log(myArr.indexOf(19)); //if check value which is not in array then answer is -1

const newArr = myArr.join(); //binde array in to newArr and convert to string

console.log(myArr); //the output is [0,1,2,3,4,5,6,7]
console.log(newArr); //the output is '0,1,2,3,4,5,6,7'

//=====>slice, splice; <========

console.log("A ", myArr); //The ouput is :A[0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3); //slice myArr

console.log(myn1); //The ouput is :[1,2] start from 1 and 2 but 3(last value) not include in slice
console.log("B ", myArr); //The ouput is :B [0,1,2,3,4,5] orignal value not effected by slice method

const myn2 = myArr.splice(1, 3); //Splice myArr

console.log(myn2); //The ouput is :[1,2,3]start from 1 and end at 3 mean all values used
console.log("C ", myArr); //The ouput is :C [0,4,5] orignal value daleted from myArr after splice method

//Note : mostly people answer the diff btween slice and splice is in slice last range not includes but in splice its includes but this is not complet answer the complet answer is same as top for ranges but in slice orignal array remain same but in splice orignal array effected this is complet answer

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros); //the output is ["thor", "Ironman", "spiderman",["superman", "flash", "batman"]] geting complet array of dc_heros inside of marvel at as 4th element of an array
console.log(marvel_heros[3][1]); //accessing the flash we use this approch bcz array inside of an array so 1st we get dc array index in marval aaray and then give flas index

//concate arrays and give all values in new single array
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); //the output is : ["thor", "Ironman", "spiderman","superman", "flash", "batman"]

//spred opretor of an array
const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros); //the output is : ["thor", "Ironman", "spiderman","superman", "flash", "batman"]

//Note : Concate and spred is almost same but mostly people prefer spred bcz in concate use 2 array but in spred if we want more the 2 array marge then for example [...marvel_heros, ...dc_heros , ...punjabi-Heros] etc

//raear concept of array to use
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // flat use to return new array with all values in single array and in flat we give range that in what depth of array mean in our case depth is 3 gives but we simply give infinity which automaticaly converted all depths
console.log(real_another_array); //the output is : [1, 2, 3, ,4, 5, 6, 7, 6, 7, ,4, 5];

console.log(Array.isArray("Hitesh")); //false bcz it is string
console.log(Array.from("Hitesh")); // this convert to array and output is : ['H','i','t','e','s','h']
console.log(Array.from({ name: "hitesh" })); // interesting bcz it give output is {} object bzs specifacly tell his make array of keys or value of object

//Converting multiple arrys or variables in to array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //the output is :[100,200,300]
