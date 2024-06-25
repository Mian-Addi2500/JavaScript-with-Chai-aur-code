const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // ********With if else statment********

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = "grey";
    // }
    // if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }

    // ******* With switch case ***********

    const tagertId = e.target.id;
    const expr = tagertId;
    switch (expr) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;

      default:
        body.style.backgroundColor = "white";
    }
  });
});
