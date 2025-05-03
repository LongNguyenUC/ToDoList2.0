import "./styles.css";
import { Project, displayProjects } from "./project.js";
import { toDo, displayToDos } from "./todos.js";
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
let userToDosTest = [
  new toDo("Write Some Code", "dummy-text", "dummy-text", "dummy-text"),
  new toDo("Turn in Project", "dummy-text", "dummy-text", "dummy-text"),
  new toDo("Buy Snacks", "dummy-text", "dummy-text", "dummy-text"),
];

displayProjects(userProjects);
displayToDos(userToDosTest);
console.log("hello!");
