import "./styles.css";
import { Project, displayProjects } from "./project.js";
import { toDo, displayToDos } from "./todos.js";

const addTaskPopUp = document.querySelector(".task-details");
const addTaskButton = document.querySelector(".add-task-container");
const closeTaskPopUpButton = document.querySelector("#closeTaskDetails");
// Default Projects
// new Project("Home");
// new Project("My Work");
// new Project("Startup");

let userProjects = [
  new Project("Home"),
  new Project("My Work"),
  new Project("Startup"),
];

// testing to-dos class and display
// let userToDosTest = [
//   new toDo("Write Some Code", "dummy-text", "dummy-text", "dummy-text"),
//   new toDo("Turn in Project", "dummy-text", "dummy-text", "dummy-text"),
//   new toDo("Buy Snacks", "dummy-text", "dummy-text", "dummy-text"),
// ];
let currentProjectIndex = 0;
let projectRef = userProjects[currentProjectIndex].tasks;
projectRef.push(
  new toDo("Write Some Code", "dummy-text", "dummy-text", "dummy-text")
);

displayProjects(userProjects);
displayToDos(userProjects[currentProjectIndex].tasks);

addTaskButton.addEventListener("click", () => {
  addTaskPopUp.showModal();
});

closeTaskPopUpButton.addEventListener("click", () => {
  addTaskPopUp.close();
});
