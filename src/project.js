const projectsContainer = document.querySelector(".Projects");

export class Project {
  constructor(name) {
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

    projectsContainer.appendChild(titleContainer);
  }
}
