import { addTask } from "./components/addTask.js";

const btn = document.querySelector('[data-form-btn]');

btn.addEventListener('click', addTask);

/*  CONOCIMIENTOS:

    1.- Guardar las tareas en el navegador utilizando Session Storage
    2.- Almacenar las tareas con LocalStorage
    3.- Transformar objetos en string utilizando JSON.stringify()
*/