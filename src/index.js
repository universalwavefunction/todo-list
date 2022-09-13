import {tasks, today} from './newtask';
import {openTaskForm} from './task-form';

const myTasks = [];
const newTaskForm = document.getElementById('task-form');
openTaskForm()

const formContainer = document.getElementById('form-container');
const createTask = document.getElementById('new-task');
const exit = document.getElementById('exit');
const rightSide = document.getElementById('task-container');
const submit = document.getElementById('submit-task');
const todayTasks = document.getElementById('today');
const allTasks = document.getElementById('all');
const projectContainer = document.getElementById('project-container');
const createProject = document.getElementById('new-project');

let displayType = "all";

createTask.addEventListener('click', () => {
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

createProject.addEventListener('click', () => {
  formContainer.style.display = 'flex'
  newTaskForm.style.display = 'flex'
})

exit.addEventListener('click', () => {
  formContainer.style.display = 'none';
  newTaskForm.style.display = 'none';
  newTaskForm.reset();
});

submit.addEventListener('click', () => {
  formContainer.style.display = 'none';
  newTaskForm.style.display = 'none';
  newTaskForm.reset();
});


export {myTasks,newTaskForm,rightSide,projectContainer,displayType,exit,formContainer};

/*fill out project info, press submit, adds project as side button
and div to right side with own add tasks button that adds task
direct to project, and has info about project. Should projects
show up in 'All'?

Future Features:
- make projects functional
- back end storage
- add week + month buttons
- sort by date,completed,priority
*/
