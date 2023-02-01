import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

const addTask = (evento) => {// add la estructura html para que los elementos sean visibles para el usuario
  const list = document.querySelector('[data-list]');
  const task = createTask(evento);
  list.appendChild(task);


}

const createTask = (evento) => {// crea la estructura html tomar datos y colocarlos donde corresponde (no los add por lo que no son visibles aun)
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector("[data-form-date]");
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');
  /* console.log(dateFormat); */
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';
  //backticks
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

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
