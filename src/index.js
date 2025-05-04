import "./styles.css";
import { Project, displayProjects, referenceArray } from "./project.js";
import { toDo, displayToDos, createToDo } from "./todos.js";

const addTaskPopUp = document.querySelector(".task-details");
const addTaskButton = document.querySelector(".add-task-container");
const closeTaskPopUpButton = document.querySelector("#closeTaskDetails");
const submitTaskDetails = document.querySelector("#submitTaskDetails");
const addNewProjectButton = document.querySelector(".add-projects-button");

let userProjects = [new Project("Home"), new Project("My Work")];

let currentProjectIndex = 0;

displayProjects(userProjects);

addTaskButton.addEventListener("click", () => {
  addTaskPopUp.showModal();
});

closeTaskPopUpButton.addEventListener("click", () => {
  addTaskPopUp.close();
});

submitTaskDetails.addEventListener("click", (event) => {
  event.preventDefault();
  let newToDo = createToDo();
  // TODO: Form validation before creating object and appending

  // userProjects[currentProjectIndex].tasks.push(newToDo);
  // displayToDos(userProjects[currentProjectIndex].tasks);
  referenceArray.push(newToDo);
  displayToDos(referenceArray);

  console.log(newToDo);
  addTaskPopUp.close();
});

addNewProjectButton.addEventListener("click", () => {
  // Tempoary Test
  let projectName = prompt("Enter Project Name");
  userProjects.push(new Project(projectName));
  displayProjects(userProjects);
});
