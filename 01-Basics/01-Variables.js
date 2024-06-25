const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
// accountCity = "Jaipur";  // this is not possible bcz node js do not premet to change constatnt value
let accountState;

// accountId = 2 // not allowed

// accept const remaing all varables should be changes
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//console.table show results in table form

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
