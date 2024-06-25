//maps
//.map function also having calback fnction
//it is better than foreach
//it automatically returns values
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const returnNums = myNumers.map((num) => {
  return num + 10;
});
console.log(returnNums);

// chanings in map function
// mean add map fuction two time or add map and filter together this is called chanings
const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1) // in this map num value is updated with 1st map funcationallty  mean num value for 1 is now 10 bcz multipuly by 10 in 1st map function
  .filter((num) => num >= 40); // add filter method to filter the values

console.log(newNums);
