//  Promises are the concept of doing a task with in some time intervals and the result should be shown in resolve the problm or reject the task i.e(DBcall done or reject ) and another fuction should be with it fufill which you can call is default function bcz if opertion resolve or rejected this fuction always run and show resultant of you promis

// How to creat promis

//****** 1st way to creat Promise ******** */

//use new keyword and use Promiss. Promiss take a callback function with 2 parameter(also call function too) resolve and reject
const promisOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task complete");
    resolve(); //this function called for sending
  }, 1000);
});
//when promis task complete then use (.then ) method if task resolve successfull and (.then) method also have a callback function which return values which gets from promise
promisOne.then(() => {
  console.log("promis resolved");
});

//****** 2nd way to creat Promise ******** */

// In this way we complete task in one block no use for storing promise in any variable in this direct create promise

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 complete");
    resolve();
  }, 1000);
}).then(() => {
  //direct then called bcz no varible store promise
  console.log("task 2 resolved");
});

//3rd promise create which use data in resolve and get data in (.then)method

const promisThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ Username: "Adil", Email: "adil@example.com" }); //now in resolve method we use/pass data
  }, 1000);
});
promisThree.then((user) => {
  //now in (.then) we give parameter in function to get resolve method value
  console.log(user);
});

//4th promise create which use  resolve and reject both method in it

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; // use error by checking file resolve or reject
    if (!error) {
      resolve({ username: "Zono", password: "123" });
    } else {
      reject("ERROR : Something went wrong"); //reject give you an error
    }
  }, 1000);
});
//we use nested/chaning (.then ) to get return value of parent(.then) method [This concept mostly used in Data-Base]
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    //(.catch)method used to show error messages in rejection method
    console.log(error);
  })
  .finally(() => {
    // this method shows after sometime x time of amount that the task you want in promise is finally done?
    console.log("The promise is ether resolve or rejected");
  });

//An other Syntex of Promises rather then (.then and .catch) use async await syntex [both approches are oky its upon you which you prefer]

const promisFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; // use error by checking fill resolve or reject
    if (!error) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("ERROR : JavaScript Something went wrong"); //reject give you an error
    }
  }, 1000);
});
async function cunsomePromiseFive() {
  //   const response = await promisFive;
  //   console.log(response);

  // the above async and await only show resolved values error do not handeled in async and await method for this we use (try and catch block )
  try {
    const response = await promisFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
cunsomePromiseFive(); //run async function to show results

/**********Now use this concept in real world senerew ****** */

/*
async function getAllUsers() {
  try {
    //fetching data is time taken process therefor use awit to fetch method
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    //convert data to json bcz now its come in the form of string by this we do not get any value from it
    const data = await responce.json(); //converting to json also time taken there for use await also
    console.log(data);
  } catch (error) {
    console.log("E :", error);
  }
}
getAllUsers();   

*/

//using fetch with 1st method(.then and .catch)

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json(); //in this we donot use awaite bczwe know  1st (.then) solved and then next(.then) called
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
