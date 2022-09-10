import {tasks, displayType, today} from './newtask';
import {openTaskForm} from './task-form';

const myTasks = [];

const formContainer = document.getElementById('form-container');
openTaskForm()

const createTask = document.getElementById('new-task');
const exit = document.getElementById('exit');
const newTaskForm = document.getElementById('task-form');
const rightSide = document.getElementById('task-container');
const submit = document.getElementById('submit-task');
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
- require title and other info inputs
- make projects work & week/month?
- add back end storage
- sort by date, completed, priority
- details button shows details on click (either pop up or expands)
*/
