// 1.Add Element daalgavar

// count = 2;
// const pro = document
//   .getElementById("button")
//   .addEventListener("click", function () {
//     var newBox = document.createElement("div");
//     newBox.className = "box";
//     newBox.innerText = count;
//     document.getElementById("box-container").appendChild(newBox);
//     count++;
//   });

// 2. Additional game daalgavar

// console.log(Math.floor(Math.random() * 100));
// document
//   .getElementById("updateButton")
//   .addEventListener("click", generateNumbers);

// function generateNumbers() {
//   const num1 = Math.floor(Math.random() * 100) + 1;
//   const num2 = Math.floor(Math.random() * 100 + 1);
//   document.getElementById("number1").value = num1;
//   document.getElementById("number2").value = num2;
//   document.getElementById("userSum").value = "";
// }
// document.getElementById("checkButton").addEventListener("click", checkSum);

// function checkSum() {
//   const num1 = parseInt(document.getElementById("number1").value);
//   const num2 = parseInt(document.getElementById("number2").value);
//   const userSum = parseInt(document.getElementById("userSum").value);

//   if (num1 + num2 === userSum) {
//     alert("Zuw too bna");
//   } else {
//     alert("Buruu too bna");
//   }
// }

// 3. Change the color daalgavar

// let button = document.getElementById("button");
// const container = document.getElementById("container");

// button.addEventListener("click", function () {
//   container.style.backgroundColor =
//     "#" + Math.floor(Math.random() * 16777215).toString(16);
// });

// const box=document.querySelector(div.box);

const box = document.getElementsByClassName("box")[0];
box.addEventListener("click", changeShape);
box.addEventListener("dblclick", changeShapeDblClick);

function changeShape() {
  box.classList.add("circle");
}
function changeShapeDblClick() {
  box.classList.add("triangle");
}
// function changeColor() {
//   box.id = "box";
// }
