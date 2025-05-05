import { Project } from "./project";
import { toDo } from "./todos";

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function obatainFromStorage() {
  let stringOfProjects = localStorage.getItem("user-projects");
  let projectsArr = JSON.parse(stringOfProjects);

  console.log(projectsArr);
  let savedUserProjects = [];
  for (const project of projectsArr) {
    let projectObj = new Project(project.name);

    let savedUserTasks = [];
    for (const task of project.tasks) {
      let taskObj = new toDo(
        task.title,
        task.description,
        task.dueDate,
        task.priority
      );
      savedUserTasks.push(taskObj);
    }
    projectObj.tasks = savedUserTasks;
    savedUserProjects.push(projectObj);
  }

  return savedUserProjects;
}

export function updateStorage(arrayOfProjects) {
  const projectsJSON = JSON.stringify(arrayOfProjects);
  localStorage.setItem("user-projects", projectsJSON);
}
