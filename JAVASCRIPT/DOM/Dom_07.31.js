// const boxElement = document.getElementById("box");
// const roundElement = document.createElement("div");

// boxElement.style = "width:100px; height: 100px; border: 1px solid blue";
// roundElement.style =
//   "width: 100px; height: 100px; border: 1px solid red; border-radius:50%";

// document.body.appendChild(roundElement);
// document.body.appendChild(boxElement);

// const containerElement = document.getElementById("container");
// containerElement.style = "width: 100px; height: 100px; border: 1px solid red";

// const boxElement = document.getElementsByClassName("box");
// // console.log(boxElement);
// boxElement[1].style = "width: 100px; height: 100px; border: 1px solid blue";

// const boxEl = document.querySelector("p.box");
// boxEl.innerText = "Hello";
// containerElement.innerHTML = `<div>Hello</div>`;
// containerElement.remove();

// const containerElement = document.createElement("div"); //div=Tag name
// const container2lement = document.createElement("div"); //div=Tag name
// const container3lement = document.createElement("p"); //p=Tag name

// containerElement.style =
//   "width: 100px; height: 100px; border: 1px solid red; border-radius:8px";

// document.body.appendChild(containerElement);

// const containerElement = document.getElementsByClassName("container")[0];
// containerElement.classList.add("red");
// containerElement.classList.remove("container");

// for (let i = 5; i > 0; i--) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

for (let i = 0; i < 10; i++) {
  let row = "";
  for (let k = 0; k < 10 - i; k++) {
    row += " ";
  }
  if (i % 2 === 1) {
    for (let j = 0; j < i; j++) {
      row += " *";
    }
  }
  console.log(row);
}
console.log("----------------------");

function stars(n) {
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let k = 1; k < n - i; k++) {
      row += " ";
    }
    if (i % 2 === 1) {
      for (let j = 0; j < i; j++) {
        row += " *";
      }
    }
    console.log(row);
  }
}
stars(10);
