import {rightSide} from "./index";

const myTasks = [];
const taskInfo = [1,2,3,4];

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

    newTask.display = "<div class='task-container'>" + "<p>" + newTask.title + "</p>"
    + "<button id='details'>" + "details" + "</button>" + "<p>" + newTask.duedate +
    "</p>" + "<p>" + "Completed: " + "<input type='checkbox' value='yes' id='toggle'" + newTask.checked + ">"
    + "</p>" + "<button id='delete'>" + 'x' + "</button>" + "</div>"

    myTasks.push(newTask);
    taskInfo.push(newTask.display);
    taskDisplay()

    const submit = document.getElementById('submit-task')
    submit.addEventListener('click', () => {
      addTask()
      console.log(taskInfo)
    })

  }

  const taskDisplay = () => {
    rightSide.innerHTML = "";
    for (let task=0; task<taskInfo; task++) {
      rightSide.innerHTML += taskInfo[task]
    }
  };

  return {tasks, task, addTask, taskDisplay}
}


export {tasks,myTasks,taskInfo}
