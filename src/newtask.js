import {myTasks,newTaskForm,rightSide,projectContainer,displayType,todayTasksButton,allTasksButton,sideButtons} from './index';
import {projects, myProjects} from './projects';

const today = new Date().toLocaleDateString('en-ca');
let count = 0;
let todayTasks = [];

const tasks = () => {
  const task = (title, duedate, completed, position, editing, checked, display, id, taskClass) => {
    return {title,duedate,completed,position,editing,checked,display,id,taskClass}
  }


  const addTask = () => {
    if (myTasks.length == 0 || myTasks[myTasks.length - 1].editing == true) {
      const newTask = task(`<input type="text" id="edit-title-${count}" placeholder="Task" required>`,
      `<input type="date" id="edit-date-${count}" name="duedate" min="${today}">`, false, count, false);

      if (newTask.completed == true) {
        newTask.checked = "checked";
        newTask.taskClass = "completed-task"
      }
      else if (newTask.completed == false) {
        newTask.checked = ""
        newTask.taskClass = "task-container"
      }

      if (displayType == "today") {
        newTask.duedate = `<input type="date" id="edit-date-${count}" name="duedate" min="${today}" value="${today}">`;
      }

      myTasks.push(newTask);

      newTask.id = "task-container-" + count;
      count += 1;
      updateTaskDisplay();
    }
    else if (myTasks[myTasks.length - 1].editing == false) {
      let editIndex;
//can be cleaned up:
      if (displayType == "today") {
        editIndex = myTasks.indexOf(todayTasks[todayTasks.length - 1]);
      }
      else if (displayType == "all") {
        editIndex = myTasks.length - 1;
      }
      let editTitle = document.getElementById(`edit-title-${myTasks[editIndex].position}`)
      let editDate = document.getElementById(`edit-date-${myTasks[editIndex].position}`)
      myTasks[editIndex].title = editTitle.value;
      myTasks[editIndex].duedate = editDate.value;
      updateTaskDisplay();
      myTasks[editIndex].editing = true;
    };
  }

  const updateTaskDisplay = () => {
    for (var i=0;i<myTasks.length;i++) {
      myTasks[i].display = "<div class='" + myTasks[i].taskClass + "' id='" + myTasks[i].id + "'>" + "<div id='newtask-completed'>" + "<input type='checkbox' id='toggle'" + myTasks[i].checked + ">"
      + myTasks[i].title + "</div>" + "<div id='newtask-duedate'>" + myTasks[i].duedate
      + "</div>" + "<div class='buttons'>" + "<button id='edit'>" + `<img src="edit-button.svg" alt="Edit" height="12px">` + "</button>" + "<button id='delete'>" + 'x' + "</button>" + "</div>" + "</div>"
    }
    if (displayType == "today") {
      displayTodayTasks();}

    else if (displayType == "all") {
      displayAllTasks();}
  }

  const displayAllTasks = () => {
    for (var i=0;i<sideButtons.length;i++) {
      sideButtons[i].style.backgroundColor = "transparent"}
    allTasksButton.style.backgroundColor = "#deffd1"
    rightSide.innerHTML = "";
    for (var i=0;i<myTasks.length;i++) {
      rightSide.innerHTML += myTasks[i].display
    }
    toggleCheck();
    editTask();
    removeTask();
  }

  const displayTodayTasks = () => {
    for (var i=0;i<sideButtons.length;i++) {
      sideButtons[i].style.backgroundColor = "transparent"}
    todayTasksButton.style.backgroundColor = "#deffd1"
    rightSide.innerHTML = "";
    todayTasks = [];
    for (var i=0;i<myTasks.length;i++) {
      if (myTasks[i].duedate == today || myTasks[i].duedate.includes(`value="${today}"`)) {
        todayTasks.push(myTasks[i])
        rightSide.innerHTML += myTasks[i].display
    }}
    toggleCheck();
    editTask();
    removeTask();
  }

  const toggleCheck = () => {
    const toggle = document.querySelectorAll('#toggle')
    let toggleIndex;
    toggle.forEach((button, i) => {
      button.addEventListener("click", () => {
        if (displayType == "today") {
          toggleIndex = myTasks.indexOf(todayTasks[i]);
        }
        else if (displayType == "all") {
          toggleIndex = i;
        }
        myTasks[toggleIndex].completed = !myTasks[toggleIndex].completed
        if (myTasks[toggleIndex].checked == "checked") {
          myTasks[toggleIndex].checked = "";
          myTasks[toggleIndex].taskClass = "task-container"
          updateTaskDisplay();
        }
        else {
          myTasks[toggleIndex].checked = "checked";
          myTasks[toggleIndex].taskClass = "completed-task"
          updateTaskDisplay();}
    })})}

  const editTask = () => {
    const edit = document.querySelectorAll("#edit")
    let editIndex;
    edit.forEach((editButton, i) => {
      editButton.addEventListener("click", () => {
        if (displayType == "today") {
          editIndex = myTasks.indexOf(todayTasks[i]);
        }
        else if (displayType == "all") {
          editIndex = i;
        }
        if (myTasks[editIndex].editing) {
          myTasks[editIndex].title = `<input type='text' id='edit-title-${myTasks[editIndex].position}' size='15' value="${myTasks[editIndex].title}">`
          myTasks[editIndex].duedate = `<input type='date' id='edit-date-${myTasks[editIndex].position}' min=${today} value="${myTasks[editIndex].duedate}">`
          updateTaskDisplay();
          myTasks[editIndex].editing = false;
        }
        else if (!myTasks[editIndex].editing) {
          let editTitle = document.getElementById(`edit-title-${myTasks[editIndex].position}`)
          let editDate = document.getElementById(`edit-date-${myTasks[editIndex].position}`)
          myTasks[editIndex].title = editTitle.value;
          myTasks[editIndex].duedate = editDate.value;
          updateTaskDisplay();
          myTasks[editIndex].editing = true;
        }
      })
  })}

  const removeTask = () => {
    const del = document.querySelectorAll("#delete")
    del.forEach((x, i) => {
      x.addEventListener("click", () => {
        if (displayType=="all") {
          myTasks.splice(i, 1)
          displayAllTasks()}
        else if (displayType=="today"){
          myTasks.splice((myTasks.indexOf(todayTasks[i])), 1)
          todayTasks.splice(i, 1)
          displayTodayTasks()}
    })})}

  return {tasks, task, addTask, displayAllTasks, displayTodayTasks}
}

export {tasks, today};
