// call object is used to define if  we done work in one function but in next fuction we execute the feacter or 1st function then what will be the function gets value from it and show us mean which (this ) used by fuction i.e example

// create 1st function
function setUserName(username) {
  this.username = username;
  console.log("called");
}

// create 2nd function
function creatUser(username, password, email) {
  // we should set username in this fuction but username set in 1st function then how to get / access username

  // setUserName(username);

  //by the way by this fuction should not call it should or getting reference only for overcome this problem we use (.call)with function for calling function and holding referance too

  //setUserName.call(username);

  //But again fuction called and referance hold but we do not getting value from fucntion for this we give reference that we say to 1st function that you donot set the user name by your (this)  bcz it should be gaib or delete so I/2nd function give you my (this) reference to show your all data

  setUserName.call(this, username); //when we use call use give 1st parameter (this) optionaly and this (this) keyword shows the 1st function crrunt context and now username should be shown
  this.email = email;
  this.password = password;
}

//calling function
const chai = new creatUser("adil", "123", "info@info.com");
console.log(chai);
