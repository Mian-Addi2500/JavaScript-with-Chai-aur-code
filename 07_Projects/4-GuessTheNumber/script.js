let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaningGuess = document.querySelector(".lastResult");
const hiOrLow = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
let previousGuess = [];
const p = document.createElement("p");
let numberOfGuess = 1;
let playGame = true;

// check whether game play ture or not and add On click event on submit butn

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validGuessValue(guess);
  });
}

//  valide guess value and check remaing guess numbers

function validGuessValue(guess) {
  // check value validation
  if (isNaN(guess)) {
    alert("Please enter Valid number");
  } else if (guess < 1) {
    alert("Your number is less then 1");
  } else if (guess > 100) {
    alert("Your number is greater then 100");
  }
  // push guess value to show in previous guesse

  previousGuess.push(guess);

  //   calculate remaning number of guesses

  if (numberOfGuess === 11) {
    clearGuessValue(guess);
    displayGuessValueMessage(`Game Over. Random number was ${randomNumber}`);
    endGame();
  } else {
    checkGuessValue(guess);
    clearGuessValue(guess);
  }
}
// Match guess value with random number

function checkGuessValue(guess) {
  if (guess === randomNumber) {
    displayGuessValueMessage(`You guessed correct number Congratulations!`);
    endGame();
  } else if (guess > randomNumber) {
    displayGuessValueMessage(
      `Your guessed  number is tooo High! Try again please!`
    );
  } else if (guess < randomNumber) {
    displayGuessValueMessage(
      `Your guessed  number is tooo low! Try again please!`
    );
  }
}
// clear input filed and update remaing guess field and previous guess

function clearGuessValue(guess) {
  userInput.value = ""; //clear iput filed
  guessSlot.innerHTML += `${guess}  `; //show guess in previous guess
  numberOfGuess++; // increase number of guess
  remaningGuess.innerHTML = `${12 - numberOfGuess}`; // decrese value of remaing guess
}
function displayGuessValueMessage(message) {
  hiOrLow.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Play Again!</h2>`;
  p.style.backgroundColor = "red";
  p.style.borderRadius = "10px";
  p.style.width = "150px";
  p.style.margin = "auto";
  p.style.padding = "1px";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newBtn = document.querySelector("#newGame");
  newBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];

    numberOfGuess = 1;
    guessSlot.innerHTML = "";
    remaningGuess.innerHTML = `${12 - numberOfGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
