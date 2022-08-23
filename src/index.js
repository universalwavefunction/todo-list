const newTask = document.getElementById('new-task')
const exit = document.getElementById('exit')
const newTaskForm = document.getElementById('task-form')

newTask.addEventListener('click', () => {
  newTaskForm.style.display = 'flex';
})

exit.addEventListener('click', () => {
  newTaskForm.style.display = 'none';
})

/*
Things to finish:
- top middle should say "Add task", form design: 'x' in top right corner
- add new task/project, makes pop up form
- After task is created its displayed with 'title', 'description', 'date created', 'optional due date', 'optional level of priority', checkbox, delete button, edit button
- main area that shows all the tasks
- different tabs/projects that tasks can move between
*/
