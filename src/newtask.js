import {myTasks,newTaskForm,formContainer,rightSide} from './index';

const today = new Date().toLocaleDateString('en-ca');
let displayType = "all";
let count = -1;

const tasks = () => {
  const task = (title, description, duedate, type, priority, completed, position, checked, display, id) => {
    return {title,description,duedate,type,priority,completed,position,checked,display, id}
  }

  const addTask = () => {
    const newTask = task(document.getElementById("title").value,
    document.getElementById("description").value, document.getElementById("duedate").value,
    document.getElementById("type").value, document.getElementById('priority').value,
    document.getElementById("completed").checked, myTasks.length);

    if (newTask.completed == true) {
      newTask.checked = "checked";
    }
    else if (newTask.completed == false) {
      newTask.checked = ""
    }

    myTasks.push(newTask);
    newTaskForm.reset()
    newTaskForm.style.display = 'none';
    formContainer.style.display = 'none';
    count += 1;
    newTask.id = "task-container-" + count;

    updateTaskDisplay();

    if (displayType == "today") {
      displayTodayTasks();}

    else if (displayType == "all") {
      displayAllTasks();}
  }

  const updateTaskDisplay = () => {
    for (var i=0;i<myTasks.length;i++) {
      myTasks[i].display = "<div class='task-container' id='" + myTasks[i].id + "'>" + "<div id='newtask-completed'>" + "<input type='checkbox' id='toggle'" + myTasks[i].checked + ">"
      + myTasks[i].title + "</div>" + "<button id='details'>" + "details" + "</button>" + "<div id='newtask-duedate'>" + myTasks[i].duedate
      + "</div>" + "<button id='delete'>" + 'x' + "</button>" + "</div>"
  }}

  const displayAllTasks = () => {
    rightSide.innerHTML = "";
    for (var i=0;i<myTasks.length;i++) {
      rightSide.innerHTML += myTasks[i].display
    }
    toggleCheck();
    removeTask();
  }

  const displayTodayTasks = () => {
    rightSide.innerHTML = "";
    for (var i=0;i<myTasks.length;i++) {
      if (myTasks[i].duedate == today) {
        rightSide.innerHTML += myTasks[i].display
    }}
    toggleCheck();
    removeTask();
}

  const toggleCheck = () => {
    var toggle = document.querySelectorAll('#toggle')
    toggle.forEach((button, i) => {
      button.addEventListener("click", () => {
        myTasks[i].completed = !myTasks[i].completed
        if (myTasks[i].checked == "checked") {
          myTasks[i].checked = "";
          document.querySelector("#" + myTasks[i].id).style.color="black";
          updateTaskDisplay();
        }
        else {
          myTasks[i].checked = "checked";
          document.querySelector("#" + myTasks[i].id).style.color="#D3D3D3";
          updateTaskDisplay();}
    })})}

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

export {tasks, displayType};
