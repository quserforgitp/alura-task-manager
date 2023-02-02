import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './displayTasks.js';


export const addTask = (evento) => {
    evento.preventDefault();
    
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    if ( value === "" || date === "" )
        return;// sale de la funcion

    input.value = '';
    calendar.value = '';

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
      }

      list.innerHTML = '';

    const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];
    tasklist.push( taskObj );
    localStorage.setItem("tasks",JSON.stringify(tasklist));

    displayTasks();
  }


  
  export const createTask = ({ value,dateFormat,complete,id }) => {
    
    const task = document.createElement('li');
        task.classList.add('card');

    const taskContent = document.createElement('div');

    console.log(complete);

    const check = checkComplete(id);

    if (complete) {
      console.log("completada");
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    }
    
    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);
        // task.innerHTML = content;

    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
    return task;
  };