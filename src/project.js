import { displayToDos } from "./todos";

const projectsContainer = document.querySelector(".Projects");
let currentlyClickedProjectID = 0;
export let referenceArray = undefined;

export default currentlyClickedProjectID;

export class Project {
  constructor(name, index) {
    this.name = name;
    this.tasks = [];
  }
}

export function displayProjects(Projects) {
  for (let Pro = 0; Pro < Projects.length; Pro++) {
    let titleContainer = document.createElement("li");
    let title = document.createElement("h3");
    title.textContent = Projects[Pro].name;
    titleContainer.appendChild(title);

    titleContainer.addEventListener("click", () => {
      currentlyClickedProjectID = Projects[Pro].projectID;
      displayToDos(Projects[Pro].tasks);
      referenceArray = Projects[Pro].tasks;
      console.log(currentlyClickedProjectID);
    });
    projectsContainer.appendChild(titleContainer);
  }
}
