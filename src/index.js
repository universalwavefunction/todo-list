import { tasks, today } from "./newtask";
import { openTaskForm } from "./task-form";
import { projects } from "./projects";

const myTasks = [];
const newTaskForm = document.getElementById("task-form");
openTaskForm();

const formContainer = document.getElementById("form-container");
const createTask = document.getElementById("new-task");
const exit = document.getElementById("exit");
const rightSide = document.getElementById("task-container");
const submit = document.getElementById("submit-task");
const todayTasksButton = document.getElementById("today");
const allTasksButton = document.getElementById("all");
const projectContainer = document.getElementById("project-container");
const createProject = document.getElementById("new-project");
const sideButtons = document.getElementsByClassName("side-button");

let displayType = "all";

createTask.addEventListener("click", () => {
  tasks().addTask();
});

todayTasksButton.addEventListener("click", () => {
  tasks().displayTodayTasks();
  displayType = "today";
});

allTasksButton.addEventListener("click", () => {
  tasks().displayAllTasks();
  displayType = "all";
});

createProject.addEventListener("click", () => {
  projects().addProject();
});

export {
  myTasks,
  newTaskForm,
  rightSide,
  projectContainer,
  displayType,
  exit,
  formContainer,
  todayTasksButton,
  allTasksButton,
  sideButtons,
};

/* fill out project info, press submit, adds project as side button
and div to right side with own add tasks button that adds task
direct to project, and has info about project. Should projects
show up in 'All'?

Future Features:
- make projects functional
- back end storage
- add week + month buttons
- sort by date,completed,priority
*/
