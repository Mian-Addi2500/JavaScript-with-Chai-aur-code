// if
const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

console.log("Execute");

//Comparision operator

//<, >, <=, >=, ==, !=, ===, !==

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);

const balance = 1000;

//Short hand notation of if condition which is implesite method

if (balance > 500) console.log("test");

//checking multiple conditions

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

// Real life use of if else conditions

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
