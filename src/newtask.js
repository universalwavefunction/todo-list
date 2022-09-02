import {myTasks,taskInfo,newTaskForm,formContainer,rightSide} from './index';

const today = new Date().toLocaleDateString('en-ca');

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

    newTask.display = "<div class='task-container'>" + "<div id='newtask-completed'>" + "<input type='checkbox' value='yes' id='toggle'" + newTask.checked + ">"
    + newTask.title + "</div>" + "<button id='details'>" + "details" + "</button>" + "<div id='newtask-duedate'>" + newTask.duedate
    + "</div>" + "<button id='delete'>" + 'x' + "</button>" + "</div>"

    myTasks.push(newTask);
    taskInfo.push(newTask.display);

    taskDisplay()
    toggleComplete()
    newTaskForm.reset()
    newTaskForm.style.display = 'none';
    formContainer.style.display = 'none';
  }

  const taskDisplay = () => {
    rightSide.innerHTML = "";
    for (var i=0;i<taskInfo.length;i++) {
      rightSide.innerHTML += taskInfo[i]
    }
    removeTask();
    toggleComplete();
  }

  const displayTodayTasks = () => {
    rightSide.innerHTML = "";
    for (var i=0;i<taskInfo.length;i++) {
      if (myTasks[i].duedate == today) {
        rightSide.innerHTML += taskInfo[i]
    }}
    removeTask();
    toggleComplete();
}

  const toggleComplete = () => {
    var toggle = document.querySelectorAll('#toggle')
    toggle.forEach((button, i) => {
      button.addEventListener("click", () => {
        if (myTasks[i].completed != button.checked) {
          myTasks[i].completed = button.checked
      }})
      })}

  const removeTask = () => {
    var exit = document.querySelectorAll("#delete")
    exit.forEach((x, i) => {
      x.addEventListener("click", () => {
        taskInfo.splice(i, 1)
        taskDisplay()
      })
    })}

  return {tasks, task, addTask, taskDisplay, displayTodayTasks}
}

export {tasks};
