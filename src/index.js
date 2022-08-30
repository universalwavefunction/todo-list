const myTasks = [];
const taskInfo = [];

const createTask = document.getElementById('new-task');
const exit = document.getElementById('exit');
const newTaskForm = document.getElementById('task-form');
const rightSide = document.getElementById('task-container');
const submit = document.getElementById('submit-task');
const formContainer = document.getElementById('form-container')


createTask.addEventListener('click', () => {
  newTaskForm.style.display = 'flex';
  formContainer.style.display = 'flex';
});

exit.addEventListener('click', () => {
  newTaskForm.style.display = 'none';
  formContainer.style.display = 'none';
});

submit.addEventListener('click', () => {
  tasks().addTask()
});

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
  }

  const taskDisplay = () => {
    rightSide.innerHTML = "";
    for (i in taskInfo) {
      rightSide.innerHTML += taskInfo[i]
    }
    removeTask();
    newTaskForm.reset()
    newTaskForm.style.display = 'none';
    formContainer.style.display = 'none';
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

  return {tasks, task, addTask, taskDisplay}
}


/*
Things to finish:
- make side tabs functional and include by date/type
- add back end storage
- move task to bottom on completion?
- require title and other info inputs
- edit button for each task
- sort by date, completed, priority
- details button shows details on click (either pop up or expands)
*/
