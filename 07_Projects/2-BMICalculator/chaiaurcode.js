const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const argument = document.querySelector("#argument");
  if (height == "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight == "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    // formulla for calculating BMI value
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>BMI Result is : ${bmi}</span>`;
    if (bmi <= 18.6) {
      argument.innerHTML = `<span> You are Under Weight with: ${bmi} BMI</span>`;
    }
    if (bmi <= 24.9 && bmi > 18.6) {
      argument.innerHTML = `<span> You are Normal Range with: ${bmi} BMI</span>`;
    }
    if (bmi > 24.9) {
      argument.innerHTML = `<span> You are Overweight with: ${bmi} BMI</span>`;
    }
  }
});
