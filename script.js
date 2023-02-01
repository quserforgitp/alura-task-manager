import { addTask } from "./components/addTask.js";

const btn = document.querySelector('[data-form-btn]');



//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

/*  CONOCIMIENTOS:

    1.- Utilizar el componente calendario
    2.- Manipular fechas
    3.- Destructurar objetos en javascript
*/