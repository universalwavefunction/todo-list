import {myTasks,newTaskForm,formContainer,rightSide} from './index';

const today = new Date().toLocaleDateString('en-ca');
let displayType = "all";
let count = -1;

const tasks = () => {
  const task = (title, description, duedate, type, priority, completed, position, editing, checked, display, id, taskClass) => {
    return {title,description,duedate,type,priority,completed,position,editing,checked,display,id,taskClass}
  }

  const addTask = () => {
    const newTask = task(document.getElementById("title").value,
    document.getElementById("description").value, document.getElementById("duedate").value,
    document.getElementById("type").value, document.getElementById('priority').value,
    document.getElementById("completed").checked, myTasks.length, true);

    if (newTask.completed == true) {
      newTask.checked = "checked";
      newTask.taskClass = "completed-task"
    }
    else if (newTask.completed == false) {
      newTask.checked = ""
      newTask.taskClass = "task-container"
    }

    myTasks.push(newTask);
    newTaskForm.reset()
    newTaskForm.style.display = 'none';
    formContainer.style.display = 'none';
    count += 1;
    newTask.id = "task-container-" + count;

    console.log(newTask.title)
    updateTaskDisplay();
  }

  const updateTaskDisplay = () => {
    for (var i=0;i<myTasks.length;i++) {
      myTasks[i].display = "<div class='" + myTasks[i].taskClass + "' id='" + myTasks[i].id + "'>" + "<div id='newtask-completed'>" + "<input type='checkbox' id='toggle'" + myTasks[i].checked + ">"
      + myTasks[i].title + "</div>" + "<button id='edit'>" + "edit" + "</button>" + "<div id='newtask-duedate'>" + myTasks[i].duedate
      + "</div>" + "<button id='delete'>" + 'x' + "</button>" + "</div>"
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
      console.log(myTasks[i])
    }
    toggleCheck();
    editTask();
    removeTask();
  }

  const displayTodayTasks = () => {
    rightSide.innerHTML = "";
    for (var i=0;i<myTasks.length;i++) {
      if (myTasks[i].duedate == today) {
        rightSide.innerHTML += myTasks[i].display
        console.log(myTasks[i])
    }}
    toggleCheck();
    editTask();
    removeTask();
}

  const toggleCheck = () => {
    var toggle = document.querySelectorAll('#toggle')
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
    var edit = document.querySelectorAll("#edit")
    edit.forEach((editButton, i) => {
      editButton.addEventListener("click", () => {
        if (myTasks[i].editing) {
          myTasks[i].title = `<input type='text' id='edit-title-${i}' size='15' value=${myTasks[i].title}>`
          myTasks[i].duedate = `<input type='date' id='edit-date-${i}' min=${today} value=${myTasks[i].duedate}>`
          updateTaskDisplay();
          myTasks[i].editing = false;
        }
        else if (!myTasks[i].editing) {
          let editTitle = document.getElementById('edit-title-'+i)
          let editDate = document.getElementById('edit-date-'+i)
          myTasks[i].title = editTitle.value;
          myTasks[i].duedate = editDate.value;
          updateTaskDisplay();
          myTasks[i].editing = true;
        }
      })
  })}

  const removeTask = () => {
    var exit = document.querySelectorAll("#delete")
    exit.forEach((x, i) => {
      x.addEventListener("click", () => {
        myTasks.splice(i, 1)
        if (displayType=="all") {
          displayAllTasks()}
        else if (displayType=="today"){
          displayTodayTasks()}
    })})}

  return {tasks, task, addTask, displayAllTasks, displayTodayTasks}
}

export {tasks, today, displayType};
