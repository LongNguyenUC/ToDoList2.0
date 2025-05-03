const projectsContainer = document.querySelector(".Projects");

let currentlyClickedProjectID = 0;
export default currentlyClickedProjectID;

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.projectID = crypto.randomUUID();
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
      console.log(currentlyClickedProjectID);
    });
    projectsContainer.appendChild(titleContainer);
  }
}
