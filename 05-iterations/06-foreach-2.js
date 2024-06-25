//ForEach futher details

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  //console.log(item);
  return item;
});

console.log(values); // [result is : undefine]  its mean that forEach never return any value

//++++++++ Filter Operation ++++++++++++++++

// filter opertaion return the values
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  // filter also get calback function
  return num > 4; // return greter then 4 numbers
});
console.log(newNums); //output is : [5,6,7,8,9,10]

// if I want that i am using foreach not filter than how we write code?

const newNum = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});

console.log(newNum);
//this is long code then filter

//++++++++ A BOOKS EXAMPLE +++++++++++++++++++++++++++
//this example gives you better understandings of filter
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History"); // this is implesite return of arrow function there we no need to write return keyword and we filter history books(objects) in userBooks variabe

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"; // chcking condition and return perfect value
});
console.log(userBooks);
