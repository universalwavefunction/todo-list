import {loadAll} from "./all";
import {tasks,addTask, myTasks,taskInfo} from "./newtask"

const createTask = document.getElementById('new-task')
const exit = document.getElementById('exit')
const newTaskForm = document.getElementById('task-form')
const rightSide = document.getElementById('right-side')

createTask.addEventListener('click', () => {
  newTaskForm.style.display = 'flex';
})

exit.addEventListener('click', () => {
  newTaskForm.style.display = 'none';
})

const submit = document.getElementById('submit-task')
submit.addEventListener('click', () => {
  addTask()
  console.log(taskInfo)
})

loadAll()

export {rightSide}

/*
Things to finish:
- After task/project is created its displayed with 'title', 'description', 'date created', 'optional due date', 'optional level of priority', checkbox, delete button, edit button
- main area that shows all the tasks
- different tabs/projects that tasks can move between
*/
