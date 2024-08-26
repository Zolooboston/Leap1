// // const drum1 = new Audio("./crash.mp3");
// // const button = document.getElementById("alertButton");
// // button.addEventListener("click", playAudio);
// // function playAudio() {
// //   drum1.play();
// // }

// // const button = document.getElementById("alertButton");
// // button.addEventListener("keydown", printKey);
// // function printKey(event) {
// //   console.log("Event key = ", event.key);
// // }

// {
//   var drum1 = new Audio("./tom-1.mp3");
//   let button = document.getElementById("key-w");
//   button.addEventListener("click", playAudio);
//   function playAudio() {
//     drum1.cloneNode().play();
//   }
// }
// {
//   var drum2 = new Audio("./tom-2.mp3");
//   let button = document.getElementById("key-a");
//   button.addEventListener("click", playAudio);
//   function playAudio() {
//     drum2.cloneNode().play();
//   }
// }
// {
//   var drum3 = new Audio("./tom-3.mp3");
//   let button = document.getElementById("key-s");
//   button.addEventListener("click", playAudio);
//   function playAudio() {
//     drum3.cloneNode().play();
//   }
// }
// {
//   var drum4 = new Audio("./tom-4.mp3");
//   let button = document.getElementById("key-d");
//   button.addEventListener("click", playAudio);
//   function playAudio() {
//     drum4.cloneNode().play();
//   }
// }
// {
//   var drum5 = new Audio("./snare.mp3");
//   let button = document.getElementById("key-j");
//   button.addEventListener("click", playAudio);
//   function playAudio() {
//     drum5.cloneNode().play();
//   }
// }
// {
//   var drum6 = new Audio("./crash.mp3");
//   let button = document.getElementById("key-k");
//   button.addEventListener("click", playAudio);
//   function playAudio() {
//     drum6.cloneNode().play();
//   }
// }
// {
//   var drum7 = new Audio("./kick-bass.mp3");
//   let button = document.getElementById("key-l");
//   button.addEventListener("click", playAudio);
//   function playAudio() {
//     drum7.cloneNode().play();
//   }
// }
// window.addEventListener("keydown", playAudio1);
// function playAudio1(event) {
//   switch (event.key) {
//     case "w":
//       drum1.cloneNode().play();
//       break;
//     case "a":
//       drum2.cloneNode().play();
//       break;
//     case "s":
//       drum3.cloneNode().play();
//       break;
//     case "d":
//       drum4.cloneNode().play();
//       break;
//     case "j":
//       drum5.cloneNode().play();
//       break;
//     case "k":
//       drum6.cloneNode().play();
//       break;
//     case "l":
//       drum7.cloneNode().play();
//       break;
//   }
// }
let drums = [
  new Audio("./tom-1.mp3"),
  new Audio("./tom-2.mp3"),
  new Audio("./tom-3.mp3"),
  new Audio("./tom-4.mp3"),
  new Audio("./snare.mp3"),
  new Audio("./crash.mp3"),
  new Audio("./tom-1.mp3"),
  new Audio("./kick-bass.mp3"),
];
let drumClass = document.getElementsByClassName("drum");
console.log(drumClass);

for (let i = 0; i < drumClass.length; i++) {
  drumClass[i].addEventListener("click", playDrum);
  function playDrum() {
    drums[i].cloneNode().play();
  }
}
window.addEventListener("keydown", playDrums);
function playDrums(event) {
  switch (event.key) {
    case "w":
      drums[0].cloneNode().play();
      break;
    case "a":
      drums[1].cloneNode().play();
      break;
    case "s":
      drums[2].cloneNode().play();
      break;
    case "d":
      drums[3].cloneNode().play();
      break;
    case "j":
      drums[4].cloneNode().play();
      break;
    case "k":
      drums[5].cloneNode().play();
      break;
    case "l":
      drums[6].cloneNode().play();
      break;
  }
}
