// const newDiv= document.getElementById("newDiv");
// const newClass= document.getElementsByClassName("newClass");

// DOM exercises
// 1. id selector, classname selector, tagname ashiglan doort elementiig select hiine uu
// <h1 id="title">Welcome to DOM Manipulation</h1>
// <p class="description">This is a paragraph.</p>
// <button id="changeTextButton">Change Text</button> */}

const title = document.getElementById("title");
const description = document.getElementsByClassName("description");
const textButton = document.getElementsByTagName("button");
console.log(title, description, textButton);

//       2. Doorh div dotor p tag dotor "Hello World" gesen ugtei text nemne uu

// <div id="addChild"></div>

const addChild = document.getElementById("addChild");
const paragraph = document.createElement("p");
paragraph.innerHTML = `Hello World`;
addChild.appendChild(paragraph);

//       3. Doorh p tag dotor baigaa text iig Hello Pinecone bolgoj uurchilnu uu
paragraph.innerHTML = `Hello Pinecone`;

// <p id="editText">   Hello World  </p>

//       4. p , div, span gesen elementiig div dotor uusgene uu

// <div id="create"></div>

// const create = document.getElementById("create");
// const p = document.createElement("p");
// const div = document.createElement("div");
// const span = document.createElement("span");
// p.innerText = `Hello World`;
// div.innerText = `Zol Zen`;
// span.innerText = `Zolooboston`;
// create.appendChild(p);
// create.appendChild(div);
// create.appendChild(span);

// DOM selector exercises
//  Write a script to change the text content of all paragraphs to "Updated Paragraph" using a for loop.
// <p class="text">Paragraph 1</p>

// <p class="text">Paragraph 2</p>

// <p class="text">Paragraph 3</p>

// const updatedParagraph = document.getElementsByClassName("text");
// for (i = 0; i < updatedParagraph.length; i++) {
//   updatedParagraph[i].innerHTML = `
//     Updated Paragraph`;
// }

//       2. Write a script to add 5 list items to the unordered list using a for loop

// <ul id="itemList"></ul>
const itemList = document.getElementById("itemList");
for (i = 0; i < 5; i++) {
  const list = document.createElement("li");
  itemList.appendChild(list);
  list.innerHTML = "Pinecone";
}

//       3.  Write a script to change the class of each paragraph to "highlight" using a for loop.

// <p class="text">Paragraph 1</p>

// <p class="text">Paragraph 2</p>

// <p class="text">Paragraph 3</p>

const para1 = document.querySelectorAll("p");
for (i = 0; i < para1.length; i++) {
  para1[i].className = "highlight";
}

//      4. Write a script to append 5 list items to the unordered list, but only append items with even numbers.

// <ul id="itemList"></ul>

const itemList1 = document.getElementById("itemList");
let num = 0;
for (i = 1; i < 5; i++) {
  if (i % 2 === 1) {
    const list = document.createElement("li");
    list.innerText = `${i} list`;
    itemList1.appendChild(list);
  }

  //   list.innerText = `${num} List`;
}
