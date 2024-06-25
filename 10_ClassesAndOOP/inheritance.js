// let create basic class
class user {
  // constructor
  constructor(username) {
    this.username = username;
  }
  //method
  logMe() {
    console.log(`USERNAME is : ${this.username}`);
  }
}

// so if we made  e-commerese website then we made this user to admin or kbhi teacher or kbhi any other role given to user then user name to sbhi ka set krna hi pry ga so wo kesy kren gy

// create teacher class which having  its own values and as well as user value too
// in this extends give all properties of user to teacher
class Teacher extends user {
  //   constructor
  constructor(username, password, email) {
    super(username); //we use in old days [setUserName.call(this, username);] but now classes are comes so we use simple this super and get over desire value easily aai kuch smhj behind the sceen jo kam phly hota tha wo ab kesy ho rha h
    this.password = password;
    this.email = email;
  }
  // add course method
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const chai = new Teacher("adil", "454545", "adil@a.com");
chai.addCourse();
// now check whether we use fuction of user in teacher bcz teacher having inheritance with user let explore!
chai.logMe(); // yes we access it
//now we check can we get access of teacher funcationality in user ? Lets explore!
const tea = new user("zono");
tea.logMe(); //thisis user own funcationallity
//tea.addCourse(); //No : This should not be access bcz user not inheret properties of teacher

// Now Some Qustions are rised in inhertiense consept
//No:1
console.log(chai === tea); //The answer is false
//No:2
console.log(chai === Teacher); //The answer is false bcz ya aik instence ho ky aya  h ya exect thori na aaya h

//No:3) Is chai is instense of teacher ?
console.log(chai instanceof Teacher); //The answer is true
//No:4)Is chai is instense of user too ?
console.log(chai instanceof user); //The answer is true bcz teacher inherit with user so teacher/chai also instance of user
//No:5) Is tea is instense of user ?
console.log(tea instanceof user); // the answer is true
//No:6) Is tea is instense of teacher ?
console.log(tea instanceof Teacher); // the answer is false bcz user/tea donot inherit properties of Teacher
