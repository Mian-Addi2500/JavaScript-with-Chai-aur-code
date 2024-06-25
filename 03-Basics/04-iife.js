// Immediately Invoked Function Expressions (IIFE)
// is ka mtlb h jesy hi function likha usy forn hi exicute krwana h and globle scope ky plotution sy problem hoti h kai bar to us globel scope ky varaiables ya jo b decleration hoti us ky ploution ko hatany ky leaya hm ny iffe ko use kia
// syntext of iffe (function decleration)(function exicuation)

// iffe in simple function

(function chai() {
  // named IIFE bcz this function having chai as name of function
  console.log(`DB CONNECTED`);
})(); // this (;) is nessary to use two iffe otherwise error comes

//iffe in arrow function

((name) => {
  // Unnamed IIFE bcz this function having no name of function
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh"); // iffe act same as function and geting paramets and exicuete value
