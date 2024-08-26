const STATUSES = {
  TODO: "todo",
  INPROGRESS: "inProgress",
  DONE: "done",
  BLOCKED: "blocked",
};

window.addEventListener("keydown", function (event) {
  console.log(event);
});

let todos = [
  {
    id: 1,
    text: "shudee ugaah",
    status: STATUSES.TODO,
  },
  {
    id: 2,
    text: "hool hiih",
    status: STATUSES.TODO,
  },
  {
    id: 3,
    text: "mashin ugaah",
    status: STATUSES.INPROGRESS,
  },
  {
    id: 4,
    text: "nom unshih",
    status: STATUSES.DONE,
  },
  {
    id: 5,
    text: "money oloh",
    status: STATUSES.BLOCKED,
  },
];

const todoTasksContainer = document.getElementById("todo_tasks_container");
const inProgressTasksContainer = document.getElementById(
  "inprogress_tasks_container"
);
const doneTasksContainer = document.getElementById("done_tasks_container");
const blockedTasksContainer = document.getElementById(
  "blocked_tasks_container"
);

const addTaskButton = document.getElementById("add_task_button");
const submitButton = document.getElementById("submit_button");
const dialogContainer = document.querySelector("div.dialog_container");
const inputElement = document.getElementById("input_element");
const selectElement = document.getElementById("select_status");

//code dund ashiglah huvisagchid
let isCreatingTask = false;
let taskId = 0;
// const editTaskButton = document.getElementById("add_task_button");
// console.log(dialogContainer);

function renderToDoApp() {
  let todoTasks = ``;
  let inProgressTasks = ``;
  let doneTasks = ``;
  let blockedTasks = ``;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status === STATUSES.TODO) {
      todoTasks += `<div class="task">
        <p>${todos[i].text}</p>
        <button  onclick="editTask(${todos[i].id})" style = "border: none; background-color: transparent;" ><i class="ri-pencil-line" style = "color :#999999"></i></button >
        <button  onclick="removeTask(${todos[i].id})" style = "border: none; background-color: transparent;"><i class="ri-delete-bin-line" style = "color:#A30000;"></i></button >
      </div>`;
    }

    if (todos[i].status === STATUSES.INPROGRESS) {
      inProgressTasks += `<div class="task">
        <p>${todos[i].text}</p>
        <button onclick="editTask(${todos[i].id})" style = "border: none; background-color: transparent;"><i class="ri-pencil-line" style = "color :#999999"></i></button >
        <button  onclick="removeTask(${todos[i].id})" style = "border: none; background-color: transparent;"><i class="ri-delete-bin-line" style = "color:#A30000;"></i></button >
      </div>`;
    }
    if (todos[i].status === STATUSES.DONE) {
      doneTasks += `<div class="task">
        <p>${todos[i].text}</p>
        <button onclick="editTask(${todos[i].id})" style = "border: none; background-color: transparent;"><i class="ri-pencil-line" style = "color :#999999"></i></button >
<button  onclick="removeTask(${todos[i].id})" style = "border: none; background-color: transparent;"><i class="ri-delete-bin-line" style = "color:#A30000;"></i></button >      </div>`;
    }
    if (todos[i].status === STATUSES.BLOCKED) {
      blockedTasks += `<div class="task">
        <p>${todos[i].text}</p>
        <button onclick="editTask(${todos[i].id})" style = "border: none; background-color: transparent;"><i class="ri-pencil-line" style = "color :#999999"></i></button >
        <button  onclick="removeTask(${todos[i].id})" style = "border: none; background-color: transparent;"><i class="ri-delete-bin-line" style = "color:#A30000;"></i></button >
      </div>`;
    }
  }

  todoTasksContainer.innerHTML = todoTasks;
  inProgressTasksContainer.innerHTML = inProgressTasks;
  doneTasksContainer.innerHTML = doneTasks;
  blockedTasksContainer.innerHTML = blockedTasks;
  inputElement.value = "";
  selectElement.value = "";
  taskId = 0;
  isCreatingTask = false;
}
renderToDoApp();

addTaskButton.addEventListener("click", addTask);
submitButton.addEventListener("click", submit);

// dialogContainer.addEventListener("click", removeContainer);
// function removeContainer() {
//   dialogContainer.classList.remove("flex");
// }

function addTask() {
  isCreatingTask = true;
  dialogContainer.classList.add("flex");
}

function submit() {
  if (isCreatingTask) {
    todos.push({
      text: inputElement.value,
      status: selectElement.value,
      id: randomIntFromInterval(),
      // + inputElementValue + selectedStatus,
      //Date ognoogoor hadgalah
      // id: new Date(),
    });
  } else {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === taskId) {
        todos[i].text = inputElement.value;
        todos[i].status = selectElement.value;
      }
    }
  }
  // console.log("ajillaj bnaa", todos);
  renderToDoApp();
  dialogContainer.classList.remove("flex");
}

function removeTask(id) {
  // console.log("ajillaa");

  let filteredTodo = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id !== id) {
      filteredTodo.push(todos[i]);
    }
  }
  todos = filteredTodo;
  renderToDoApp();
}

function editTask(id) {
  // selectedStatus = selectElement.options[selectElement.selectedIndex].value;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      inputElement.value = todos[i].text;
      selectElement.value = todos[i].status;
    }
  }
  taskId = id;
  dialogContainer.classList.add("flex");
}

function randomIntFromInterval() {
  return Math.floor(Math.random() * 1000);
}

function 