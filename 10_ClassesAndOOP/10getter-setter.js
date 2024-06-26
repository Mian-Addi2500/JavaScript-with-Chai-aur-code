//some time we want fine grane control that if some want to get password but i did not want to give an access or encrepted pasword return so for this we did not to give access to pswrd then how we give error to user ? for this concept getter and setter consept used
//NOTE: geter and seter by default are in every class but we did not code in it therefor there behaviour should remain default
//NOTE: if we made geter and seter then the geter and setter method use name same as use in constructor property

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    // if declear only geter method and donot made setter method then eeror comes so when make get method then its complesery to creat set method to
    return this._email.toUpperCase(); // we use _email bcz when we set value in _email therfore in get we use
  }
  set email(value) {
    this._email = value; // we use _email bcz when we set email value by using this.email the error comes bcz we already set value in constructor therefor we donnot directly set email in seter by this.email we use for this this._email to over come this and in constructor email value aready set but if we want to show uppdate value of email to user when he access mean we want to change email value to show user therefor already value set in constructor but we want to show other value to user therefor set in setter method
  }

  get password() {
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
}
const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);
