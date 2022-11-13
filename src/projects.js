import {projectContainer, rightSide, displayType, sideButtons} from './index';
import {today} from './newtask'

let myProjects = [];
let projectCount = 0;

const projects = () => {
  const project = (title, duedate, completed, position, editing, checked, display, id, projectClass, displayType, projectTasks) => {
    return {title,duedate,completed,position,editing,checked,display,id,projectClass,displayType,projectTasks}
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

    newProject.projectTasks = []
    newProject.id = "project-container-" + projectCount;
    newProject.displayType = "project" + projectCount;

    myProjects.push(newProject);

    projectCount += 1;
    updateProjectDisplay()
  }

  const updateProjectDisplay = () => {
    projectContainer.innerHTML = "";
    for (var i=0;i<myProjects.length;i++) {
      myProjects[i].display = "<div class='" + myProjects[i].projectClass + "' id='" + myProjects[i].id + "'>" + '<div>' + myProjects[i].title + '</div>'
      + "<div class='buttons'>" + "<button id='edit-project'>" + `<img src="edit-button.svg" alt="Edit" height="12px">` + "</button>" + "<button id='delete-project'>" + 'x' + "</button>" + "</div>" + "</div>"

      projectContainer.innerHTML += myProjects[i].display;
    }
    editProject()
    removeProject()
    clickProject()
  }

  const editProject = () => {
    const projectEditButtons = document.querySelectorAll("#edit-project")
    projectEditButtons.forEach((editButton, i) => {
      editButton.addEventListener("click", () => {
        if (myProjects[i].editing) {
          myProjects[i].title = `<input type='text' class='editing-project' id='edit-project-${myProjects[i].position}'>`
          updateProjectDisplay();
          myProjects[i].editing = false;
        }
        else if (!myProjects[i].editing) {
          let editProjectTitle = document.getElementById(`edit-project-${myProjects[i].position}`);
          myProjects[i].title = "<button id='project-button' class='side-button'>" + editProjectTitle.value + "</button>";
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

  const clickProject = () => {
    const projButton = document.querySelectorAll("#project-button")
    projButton.forEach((button,i) => {
      button.addEventListener("click", () => {
        for (var i=0;i<sideButtons.length;i++) {
          sideButtons[i].style.backgroundColor = "transparent"}
        button.style.backgroundColor = "#deffd1"
        //displayType = myProjects[i].displayType;
        rightSide.innerHTML = "";
        rightSide.innerHTML += button.innerText + '<br>';
        updateProjectDisplay();
      })
    })
  }

  return {projects, project, addProject, updateProjectDisplay, editProject, removeProject}
}

export {projects, myProjects}

/*
call addTask, if displayType is not == today || all, then
add tasks to new project array. With tag for project id,
when clickProject display tasks in array with specific project id

- 3 dots to open project edit/delete
*/
