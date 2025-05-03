import "./styles.css";
import { Project, displayProjects } from "./project.js";
import { toDo, displayToDos, createToDo } from "./todos.js";
import currentlyClickedProjectID from "./project.js";

const addTaskPopUp = document.querySelector(".task-details");
const addTaskButton = document.querySelector(".add-task-container");
const closeTaskPopUpButton = document.querySelector("#closeTaskDetails");
const submitTaskDetails = document.querySelector("#submitTaskDetails");

let userProjects = [
  new Project("Home"),
  new Project("My Work"),
  new Project("Startup"),
];

let currentProjectIndex = 0;

displayProjects(userProjects);
displayToDos(userProjects[currentProjectIndex].tasks);

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

  userProjects[currentProjectIndex].tasks.push(newToDo);
  displayToDos(userProjects[currentProjectIndex].tasks);

  console.log(newToDo);
  addTaskPopUp.close();
});
