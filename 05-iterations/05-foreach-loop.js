//ForEach Loop
//Mostly used Loop in js for arrays

const coding = ["js", "ruby", "java", "python", "cpp"];

//Basic forEach loop with basic function syntex

coding.forEach(function (val) {
  console.log(val); // this will give all value of coding array
});

//Basic forEach loop with arrow function syntex

coding.forEach((item) => {
  console.log(item);
});

// Deacling function first and then referance to forEach this method shoulld be work

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe); // only give referance of function not exicute function

//ForEach give not item only it should b give us iteam value , index and complet array too but complete array is not mostly used

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//Advance concept of array that array having with in objects then we also iterate is by ForEach loop so lets explore it!
// database sy jo b value ati h array ki form mn aaati h or har ki value / item aik object hi hota h to is leye hm ya iterartion kam mn leaty hn
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName); // bcz item is an object so use dot notattion to access values
});
