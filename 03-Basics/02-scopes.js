//scope
//{} in every language is scope

//Scope story start from these three key words let,var and const

//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// what is scope in nested functions
function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(website); // we can not acess conste value out side the scope {}

  two(); // 1st one() exicute and then its exicute
}

one(); // 1st this function run then two() function run

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website); // we access username bcz it is in parent scope of child function
  }
  console.log(website); //we can not acess conste value out side the scope {}
}

console.log(username); // we can not acess conste value out side the scope {} bcz username is in if {} scope

// ++++++++++++++++++ interesting ++++++++++++++++++

//syentex # 1 of function

console.log(addone(5)); // this will run at  top of the fuction defination bcz we simple declear the function

function addone(num) {
  return num + 1;
}

//syentex # 1 of function

addTwo(5); // this will not run at  top of the fuction defination bcz we simple declear the function and with declearation we also holde this function in to variable by this thing function not run
const addTwo = function (num) {
  return num + 2;
};
