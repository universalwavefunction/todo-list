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
Things to add:
- add new task/project, makes pop up form
- Each task has: 'title', 'description', 'date created', 'optional due date', 'optional level of priority', checkbox, delete button, edit button
- main area that shows all the tasks
*/
