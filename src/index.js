import {tasks, displayType} from './newtask';

const myTasks = [];

const createTask = document.getElementById('new-task');
const exit = document.getElementById('exit');
const newTaskForm = document.getElementById('task-form');
const rightSide = document.getElementById('task-container');
const submit = document.getElementById('submit-task');
const formContainer = document.getElementById('form-container');
const todayTasks = document.getElementById('today');
const allTasks = document.getElementById('all');


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

todayTasks.addEventListener('click', () => {
  tasks().displayTodayTasks()
  displayType = "today"
})

allTasks.addEventListener('click', () => {
  tasks().displayAllTasks()
  displayType = "all"
})


export {myTasks,newTaskForm,formContainer,rightSide};

/*
Things to finish:
- move task to bottom on completion, put a line through it
- require title and other info inputs
- edit button for each task
- make projects work & week/month?
- add back end storage
- sort by date, completed, priority
- details button shows details on click (either pop up or expands)
*/
