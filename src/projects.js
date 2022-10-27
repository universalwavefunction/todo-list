import {projectContainer, rightSide, displayType} from './index';
import {today} from './newtask'

let myProjects = [];
let projectCount = 0;

const projects = () => {
  const project = (title, duedate, completed, position, editing, checked, display, id, projectClass, displayType) => {
    return {title,duedate,completed,position,editing,checked,display,id,projectClass,displayType}
  }

  const addProject = () => {
    const newProject = project(`<input type="text" id="edit-project-${projectCount}" placeholder="Project" required>`,
    `<input type="date" id="edit-projectdate-${projectCount}" name="duedate" min="${today}">`, false, projectCount, false);

    if (newProject.completed == true) {
      newProject.checked = "checked";
      newProject.projectClass = "completed-project"
    }
    else if (newProject.completed == false) {
      newProject.checked = ""
      newProject.projectClass = "project-container"
    }

    newProject.id = "project-container-" + projectCount;
    newProject.displayType = "project" + projectCount;

    myProjects.push(newProject);

    projectCount += 1;
    updateProjectDisplay()
  }

  const updateProjectDisplay = () => {
    projectContainer.innerHTML = "";
    for (var i=0;i<myProjects.length;i++) {
      myProjects[i].display = "<div class='" + myProjects[i].projectClass + "' id='" + myProjects[i].id + "'>" + '<button>' + myProjects[i].title + '</button>' + "</div>"
      + "<div class='buttons'>" + "<button id='edit-project'>" + `<img src="edit-button.svg" alt="Edit" height="12px">` + "</button>" + "<button id='delete-project'>" + 'x' + "</button>" + "</div>" + "</div>"

      projectContainer.innerHTML += myProjects[i].display;
      rightSide.innerHTML = "";
      rightSide.innerHTML += myProjects[i].display;
    }
    editProject()
    removeProject()
  }

  const editProject = () => {
    const projectEditButtons = document.querySelectorAll("#edit-project")
    projectEditButtons.forEach((editButton, i) => {
      editButton.addEventListener("click", () => {
        if (myProjects[i].editing) {
          myProjects[i].title = `<input type='text' id='edit-project-${myProjects[i].position}' size='10' value="${myProjects[i].title}">`
          updateProjectDisplay();
          myProjects[i].editing = false;
        }
        else if (!myProjects[i].editing) {
          let editProjectTitle = document.getElementById(`edit-project-${myProjects[i].position}`);
          myProjects[i].title = editProjectTitle.value;
          updateProjectDisplay();
          myProjects[i].editing = true;
        }
      })
  })}

  const removeProject = () => {
    const deleteProj = document.querySelectorAll("#delete-project")
    deleteProj.forEach((proj, i) => {
      proj.addEventListener("click", () => {
          myProjects.splice(i, 1)
          updateProjectDisplay();
    })})}

  return {projects, project, addProject, updateProjectDisplay, editProject, removeProject}
}

export {projects}
