import {myTasks,newTaskForm,rightSide,projects,displayType} from './index';

const today = new Date().toLocaleDateString('en-ca');
let count = 0;

const tasks = () => {
  const task = (title, duedate, completed, position, editing, checked, display, id, taskClass) => {
    return {title,duedate,completed,position,editing,checked,display,id,taskClass}
  }

  const addTask = () => {
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
    rightSide.innerHTML = "";
    for (var i=0;i<myTasks.length;i++) {
      rightSide.innerHTML += myTasks[i].display
    }
    toggleCheck();
    editTask();
    removeTask();
  }

  const displayTodayTasks = () => {
    rightSide.innerHTML = "";
    for (var i=0;i<myTasks.length;i++) {
      if (myTasks[i].duedate == today || myTasks[i].duedate.includes(`value="${today}"`)) {
        rightSide.innerHTML += myTasks[i].display
    }}
    toggleCheck();
    editTask();
    removeTask();
  }

  const toggleCheck = () => {
    const toggle = document.querySelectorAll('#toggle')
    console.log(toggle)
    toggle.forEach((button, i) => {
      button.addEventListener("click", () => {
        myTasks[i].completed = !myTasks[i].completed
        if (myTasks[i].checked == "checked") {
          myTasks[i].checked = "";
          myTasks[i].taskClass = "task-container"
          updateTaskDisplay();
        }
        else {
          myTasks[i].checked = "checked";
          myTasks[i].taskClass = "completed-task"
          updateTaskDisplay();}
    })})}

  const editTask = () => {
    const edit = document.querySelectorAll("#edit")
    edit.forEach((editButton, i) => {
      editButton.addEventListener("click", () => {
        if (myTasks[i].editing) {
          myTasks[i].title = `<input type='text' id='edit-title-${myTasks[i].position}' size='15' value="${myTasks[i].title}">`
          myTasks[i].duedate = `<input type='date' id='edit-date-${myTasks[i].position}' min=${today} value="${myTasks[i].duedate}">`
          updateTaskDisplay();
          myTasks[i].editing = false;
        }
        else if (!myTasks[i].editing) {
          let editTitle = document.getElementById(`edit-title-${myTasks[i].position}`)
          let editDate = document.getElementById(`edit-date-${myTasks[i].position}`)
          myTasks[i].title = editTitle.value;
          myTasks[i].duedate = editDate.value;
          updateTaskDisplay();
          myTasks[i].editing = true;
        }
      })
  })}

  const removeTask = () => {
    const del = document.querySelectorAll("#delete")
    del.forEach((x, i) => {
      x.addEventListener("click", () => {
        myTasks.splice(i, 1)
        if (displayType=="all") {
          displayAllTasks()}
        else if (displayType=="today"){
          displayTodayTasks()}
    })})}

  return {tasks, task, addTask, displayAllTasks, displayTodayTasks}
}

export {tasks, today};
