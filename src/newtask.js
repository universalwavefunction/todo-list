import {myTasks,newTaskForm,formContainer,rightSide} from './index';

const today = new Date().toLocaleDateString('en-ca');
let displayType = "all";

const tasks = () => {
  const task = (title, description, duedate, type, priority, completed, position, checked, display) => {
    return {title,description,duedate,type,priority,completed,position,checked,display}
  }

  const addTask = () => {
    const newTask = task(document.getElementById("title").value,
    document.getElementById("description").value, document.getElementById("duedate").value,
    document.getElementById("type").value, document.getElementById('priority').value,
    document.getElementById("completed").checked, myTasks.length);

    if (newTask.completed == true) {
      newTask.checked = "checked";
    }

    newTask.display = "<div class='task-container'>" + "<div id='newtask-completed'>" + "<input type='checkbox' id='toggle'" + newTask.checked + ">"
    + newTask.title + "</div>" + "<button id='details'>" + "details" + "</button>" + "<div id='newtask-duedate'>" + newTask.duedate
    + "</div>" + "<button id='delete'>" + 'x' + "</button>" + "</div>"

    myTasks.push(newTask);
    newTaskForm.reset()
    newTaskForm.style.display = 'none';
    formContainer.style.display = 'none';
    taskDisplay()
  }

  const taskDisplay = () => {
    rightSide.innerHTML = "";
    for (var i=0;i<myTasks.length;i++) {
      rightSide.innerHTML += myTasks[i].display
    }
    displayType = "all";
    removeTask();
    toggleComplete();
  }

  const displayTodayTasks = () => {
    rightSide.innerHTML = "";
    for (var i=0;i<myTasks.length;i++) {
      if (myTasks[i].duedate == today) {
        rightSide.innerHTML += myTasks[i].display
    }}
    displayType = "today";
    removeTask();
    toggleComplete();
}

  const toggleComplete = () => {
    var toggle = document.querySelectorAll('#toggle')
    toggle.forEach((button, i) => {
      button.addEventListener("click", () => {
        myTasks[i].completed = !myTasks[i].completed
        if (myTasks[i].completed == true) {
          myTasks[i].checked = "checked";
          button.checked = "checked";
          console.log(myTasks[i])
        }
        else {
          myTasks[i].checked = "";
          button.checked = "";
          console.log(myTasks[i])
        }
      })})

    }

  const removeTask = () => {
    var exit = document.querySelectorAll("#delete")
    exit.forEach((x, i) => {
      x.addEventListener("click", () => {
        myTasks.splice(i, 1)
        if (displayType=="all") {
          taskDisplay()}
        else if (displayType=="today"){
          displayTodayTasks()}
      })})}

  return {tasks, task, addTask, taskDisplay, displayTodayTasks}
}

export {tasks};
