import {rightSide} from "./index";
import {tasks,myTasks,taskInfo} from "./newtask";

const loadAll = () => {
  const allTasks = document.createElement('div');
  for (let i=0; i<taskInfo; i++) {
    allTasks.innerHTML += taskInfo[i]}
  rightSide.appendChild(allTasks)
}


export {loadAll}
