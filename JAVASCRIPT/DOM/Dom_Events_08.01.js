const button = document.getElementById("alertButton");

button.addEventListener("keydown", printKey);

function printKey(event) {
  if (event.key == "a") {
    console.log("a useg darsan bna");
  }
  //   console.log("Event key=", event.key);
}
