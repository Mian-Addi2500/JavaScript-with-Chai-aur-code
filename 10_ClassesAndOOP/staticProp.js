class User {
  // constructor
  constructor(username) {
    this.username = username;
  }
  // logMe Method
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  // createId method which create unique Id when any user log In
  // but we use static key word bcz hum is method ka access har us object ko ni deana chaty jo is class sy instanciate hua h
  static createId() {
    return `123`;
  }
}
const adil = new User("adil");
console.log(adil);
console.log(adil.createId()); // this should not work bcz we make it static

//if we extends teacher with user is there posible to access static method ? Let's Explore

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe(); // we access simple method of user
console.log(iphone.createId()); // we donot access static method here

//So resultant is when we made any method static then we do not access it in any suitiontion i.e inheritances etc
