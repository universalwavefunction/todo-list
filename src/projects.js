import {projectContainer, rightSide} from './index';
import {today} from './newtask'

let myProjects = [];
let count = 0;

const projects = () => {
  const project = (title, description, duedate) => {
    return {title,description,duedate}
  }

  const addProject = () => {
    const newProject = project(`<input type="text" id="edit-project-${count}" placeholder="Project" required>`,
    `<input type="date" id="edit-projectdate-${count}" name="duedate" min="${today}">`);

    projectContainer.innerHTML += newProject.title;

    count += 1;
  }

  return {projects, project, addProject}
}

export {projects}
