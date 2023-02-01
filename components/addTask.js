import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';


export const addTask = (evento) => {
    evento.preventDefault();
    
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    input.value = '';
    calendar.value = '';

    const taskObj = {
        value,
        dateFormat
      }

    const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];
    tasklist.push({ value,dateFormat} );
    localStorage.setItem("tasks",JSON.stringify(tasklist));

    const task = createTask(taskObj);
    list.appendChild(task);
  }


  
  const createTask = ({ value,dateFormat }) => {
    
    const task = document.createElement('li');
        task.classList.add('card');

    const taskContent = document.createElement('div');
    
    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        // task.innerHTML = content;
        
    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
    return task;
  };