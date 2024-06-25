const score = 400; // by this js automaticaly uderstand this is number
console.log(score);

const balance = new Number(100); // by this you strictly define type of variable is number

console.log(balance);

console.log(balance.toString().length); //convert numbr to string and now use all propeties of string bcz it converted to number
console.log(balance.toFixed(2)); //it fixed presegen value mean . after number i.e 100.00 is the result of above

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4)); //this give precise value of number in this value should be 123.9 bcz 4 value used and 4th value precised from 8 to 9 bcz after 8 is 9 in given value

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // convert your value to beutyful commas presentation and by defaul commas are shown in us stander but by using 'en-IN' then Indian syntex shows

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // this an object by default which have many properties
console.log(Math.abs(-4)); //abslute value which convert -ve to +ve
console.log(Math.round(4.6)); //convert value to five bcz after 4 is .6
console.log(Math.ceil(4.2)); //convert always upper value like if .1 greater then 4 it convert it to 5
console.log(Math.floor(4.9)); //as same ceil this floor convert always lower value
console.log(Math.min(4, 3, 6, 8)); // minimum value
console.log(Math.max(4, 3, 6, 8)); // give max value

console.log(Math.random()); //genret random number always 0/1. somenumber
console.log(Math.random() * 10 + 1); //to get number from 1-9 this calculation used
console.log(Math.floor(Math.random() * 10) + 1); //get lower value by using floor and value after . canceled

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
