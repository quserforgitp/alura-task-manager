import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';


export const addTask = (evento) => {// add la estructura html para que los elementos sean visibles para el usuario
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
  
  
  }
  

  
  const createTask = (evento) => {// crea la estructura html tomar datos y colocarlos donde corresponde (no los add por lo que no son visibles aun)
    evento.preventDefault();
    const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];// en caso de que sea null poner [] (arreglo vacio)
    console.log(tasklist);// muestra en consola el arreglo de la lista de tareas guardadas
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]"); // captura el elemento input para entrada de fecha por el usuario (es todo el elemento)
    const value = input.value;
    const date = calendar.value;//captura el valor del elemento que es la fecha en si
    const dateFormat = moment(date).format('DD/MM/YYYY');
    /* console.log(dateFormat); */
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');
  
    const taskObj = {
      value,
      dateFormat
      /* lo mismo que 
        value: value,
        dateFormat: dateFormat */
    }
  
    tasklist.push(taskObj);// agregando al arreglo de las tareas el value,dateFormat
  
    localStorage.setItem("tasks",JSON.stringify(tasklist));// persistenete sin importar si se cierra el navegador o pestania (recuerda que localStorage es un objeto de la API JS)
  
  
  
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