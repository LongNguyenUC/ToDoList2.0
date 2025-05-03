import "./styles.css";
import { Project, displayProjects } from "./project.js";

// Default Projects
// new Project("Home");
// new Project("My Work");
// new Project("Startup");

let userProjects = [
  new Project("Home"),
  new Project("My Work"),
  new Project("Startup"),
];

displayProjects(userProjects);
console.log("hello!");
