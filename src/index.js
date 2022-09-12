import {tasks, today} from './newtask';
//import {openTaskForm} from './task-form';

const myTasks = [];

const createTask = document.getElementById('new-task');
const exit = document.getElementById('exit');
const newTaskForm = document.getElementById('task-form');
const rightSide = document.getElementById('task-container');
const submit = document.getElementById('submit-task');
const todayTasks = document.getElementById('today');
const allTasks = document.getElementById('all');
const projects = document.getElementById('projects');
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


export {myTasks,newTaskForm,rightSide,projects,displayType};


/* Future Features:
- make projects functional
- back end storage
- add week + month buttons
- sort by date/completed
*/
