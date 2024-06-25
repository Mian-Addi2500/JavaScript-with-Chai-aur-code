//Generating Random color
const randomColor = function () {
  const hex = "0123456789ABCDEF"; //Hexa Color Range
  let color = "#";
  //Run loop 0 to 6 for storing 6 value in color bcs hexa color haing 6 value
  for (let i = 0; i < 6; i++) {
    //This get hex value from 1-16 position in hex varable and stor in color one by one
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

//Changing Color Method For Click Start Button

let intervalId; //Create variable in Globel Scope to Use it Any where
const startChangingColor = function () {
  if (!intervalId) {
    //Check if interID is NULL then set IntervalId value
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};
//Stop Changing Color Method For Click Stop Button

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null; //When Clear Interval then intervalId value set to null for better approch and save memory space tooo
};
//Adding Events on Start and Stop Buttons
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
