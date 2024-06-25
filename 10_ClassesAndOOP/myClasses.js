//@@@@@@@ CLASSES @@@@@@@@@@@@@@

// declear Class

class User {
  // When Constructor call ? jessy hi class say sy 1 object initalise hoga mean jo (new) key word h wo jesy hi ham kam mn lean gy wesy hi constructor apny ap call ho jata h. Let explore it!

  // basic constructor
  // by the way har bar constructor likhna zarori ni h but agr power / oppercutinoty mill rhi h to ly leaty hn
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // aik method hota h  encryptPassword Q ky ho sakta h password clear text form mn na rakhna mean jo b possword user dy ga us k end mn haramari nich wali example ky mutabik wo 'abc' kud hi add kr d ga  to is leye ya method use kren gy
  encryptPassword() {
    return `${this.password}abc`; // ya h hmara password
  }
  // declear an other method to change value to upper case
  changeUserName() {
    return this.username.toUpperCase();
  }
}
const chai = new User("adil", "adil@adil.com", "123");
console.log(chai);
console.log(chai.encryptPassword()); // this pasword is also encripted
console.log(chai.changeUserName());

// Now Behind the sceen if we do not use class then how our above should be written

function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User2.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User2("tea", "tea@gmail.com", "123");
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
// So prove if we have not any class method then we make a function and add our functionalty in it by prototype bcz we function is also object too so we add funcationalty an get our desire result
