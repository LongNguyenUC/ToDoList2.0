import { displayToDos } from "./todos";

const projectsContainer = document.querySelector(".Projects");
const directory = document.querySelector(".directory");
export let referenceArray = undefined;

export class Project {
  constructor(name, index) {
    this.name = name;
    this.tasks = [];
  }
}

export function displayProjects(Projects) {
  projectsContainer.textContent = "";
  for (let Pro = 0; Pro < Projects.length; Pro++) {
    let titleContainer = document.createElement("li");
    let title = document.createElement("h3");
    title.textContent = Projects[Pro].name;
    titleContainer.classList.add("project-name");

    titleContainer.appendChild(title);

    titleContainer.addEventListener("click", () => {
      displayToDos(Projects[Pro].tasks);
      directory.textContent = Projects[Pro].name;
      referenceArray = Projects[Pro].tasks;
    });
    projectsContainer.appendChild(titleContainer);
  }
}
