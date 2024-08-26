const STATUSES = {
  TODO: "todo",
  INPROGRESS: "inProgress",
  DONE: "done",
  BLOCKED: "blocked",
};

const todos = [
  {
    title: "loan-management",
    description: "Add card component",
    status: STATUSES.TODO,
  },
  {
    title: "loan-management",
    description: "Add card component",
    status: STATUSES.TODO,
  },
  {
    title: "loan-management",
    description: "Add card component",
    status: STATUSES.INPROGRESS,
  },
  {
    title: "loan-management",
    description: "Add card component",
    status: STATUSES.DONE,
  },
  {
    title: "loan-management",
    description: "Add card component",
    status: STATUSES.BLOCKED,
  },
];

const statusToDoArray = [];
const statusInProgressArray = [];
for (let i = 0; i < todos.length; i++) {
  //filter by todo
  if (todos[i].status === STATUSES.TODO) {
    statusToDoArray.push(todos[i]);
  }
  //filter by inprogress
  if (todos[i].status === STATUSES.INPROGRESS) {
    statusToDoArray.push(todos[i]);
  }
}

const boxElement = document.querySelector("div.box");

//Creating elements for statusToDoArray
for (let i = 0; i < statusToDoArray.length; i++) {
  const createdElement = document.createElement("div");
  createdElement.innerHTML = `<div class="todo">
                                <h1>${statusToDoArray[i].title}</h1>
                                <p>${statusToDoArray[i].description}</p>
                                <p>${statusToDoArray[i].status}</p>
                            </div>`;

  boxElement.appendChild(createdElement);
}

//Creating elements for statusInProgressArray
for (let i = 0; i < statusInProgressArray.length; i++) {
  const createdElement = document.createElement("div");
  createdElement.innerHTML = `<div class="todo">
                                <h1>${statusInProgressArray[i].title}</h1>
                                <p>${statusInProgressArray[i].description}</p>
                                <p>${statusInProgressArray[i].status}</p>
                            </div>`;

  boxElement.appendChild(createdElement);
}
