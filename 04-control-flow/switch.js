//switch is moslty used in redux in next
//in switch we have one value and check multiple comparizen of this value

//Basic syntext of switch

switch (key) {
  case value:
    break;

  default:
    break;
}

const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
