const toDosContainer = document.querySelector(".to-dos");
const addTaskButton = document.querySelector(".add-task-container");

export class toDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function displayToDos(toDos) {
  for (const task of toDos) {
    let taskContainer = document.createElement("div");
    console.log(task);
    taskContainer.textContent = task.title;

    toDosContainer.insertBefore(taskContainer, addTaskButton);
  }
}

export function getTaskDetails() {}
