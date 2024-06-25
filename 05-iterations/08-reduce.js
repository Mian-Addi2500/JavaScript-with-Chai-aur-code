// reduce Method

const myNums = [1, 2, 3];

const myTotals = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0); // acc is used to return value in start is value is 0 which we give and currval is value of an aray

// this is aarow fuction in cal back function of reduce but its result is same the obove function
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

//An Exampel of price detecuting from shopping card using reduce
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
// declear a method of adding price of shopping cards
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
