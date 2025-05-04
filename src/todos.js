const toDosContainer = document.querySelector(".display-of-all-to-dos");
const addTaskButton = document.querySelector(".add-task-container");

const nameOfTask = document.querySelector("#nameOfTask");
const descOfTask = document.querySelector("#descOfTask");
const dueDate = document.querySelector("#dueDateOfTask");
const priority = document.querySelector("#priorityOfTask");

export class toDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function displayToDos(toDos) {
  toDosContainer.textContent = "";
  for (const task of toDos) {
    let taskContainer = document.createElement("div");
    let checkBox = document.createElement("div");
    checkBox.textContent = "✔";
    taskContainer.appendChild(checkBox);

    let displayOfTaskName = document.createElement("div");
    displayOfTaskName.textContent = task.title;
    taskContainer.appendChild(displayOfTaskName);
    taskContainer.classList.add("task-container");

    toDosContainer.appendChild(taskContainer);
  }
}

export function createToDo() {
  console.log(nameOfTask.value);
  console.log(descOfTask.value);
  console.log(dueDate.value);
  console.log(priority.value);

  let userTask = new toDo(
    nameOfTask.value,
    descOfTask.value,
    dueDate.value,
    priority.value
  );

  return userTask;
}
