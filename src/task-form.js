import {today} from './newtask';
import {newTaskForm, exit, formContainer} from './index';

const openTaskForm = () => {
  newTaskForm.innerHTML = `
    <div id="new-task-header">
      <h3 class="header-text">Add Project</h3>
      <input type="button" value="x" id="exit">
    </div>
    <div id="form-body">
      <input type="text" id="title" placeholder="Project" required>
      <textarea rows="3" placeholder="Description" id="description"></textarea>
      <div class="duedate">
        <label for="duedate">Finish by:</label>
        <input type="date" id="duedate" name="duedate" min="${today}">
      </div>
      <div class="drop-downs">
        <label for="type">Type:</label>
        <select name="type" id="type" class="dropdown" required>
          <option value="project">Project</option>
        </select>
        <label for="priority" required>Priority:</label>
        <select name="priority" id="priority" class="dropdown">
          <option value="urgent">Urgent</option>
          <option value="somewhat-urgent">Somewhat urgent</option>
          <option value="not-urgent">Not urgent</option>
        </select>
      </div>
      <div class="completed">
        <label for="completed">Completed:</label>
        <input type="checkbox" name="read" value="yes" id="completed">
      </div>
      <div class="center-submit">
        <input type="button" value="Submit" id="submit-task">
      </div>
    </div>`
}

export {openTaskForm}
