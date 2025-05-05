import { displayToDos } from "./todos";
const addTaskButton = document.querySelector(".add-task-container");
const projectsContainer = document.querySelector(".Projects");
const directory = document.querySelector(".directory");
const homeimage = document.querySelector(".image-container");
export let referenceArray = undefined;

export class Project {
  constructor(name) {
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
      addTaskButton.style.visibility = "visible";
      homeimage.style.display = "none";
      referenceArray = Projects[Pro].tasks;
    });
    projectsContainer.appendChild(titleContainer);
  }
}
