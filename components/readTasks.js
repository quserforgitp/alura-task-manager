import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const readTasks = () => {

    const list = document.querySelector(["[data-list]"]);
    console.log(list);
    
    const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasklist);
    
    dates.forEach(date => {
        console.log(date);
    });

    tasklist.forEach((task) => {

        list.appendChild(dateElement(task.dateFormat));

        list.appendChild(createTask(task));
    });
}

//fin de la clase03
/* conocimientos clase03
    1.-Recorrer el arreglo con forEach() de las tareas guardadas en LocalStorage
    2.-Utilizar pipe
    3.-Convertir las tareas almacenadas en formato string a objetos con JSON.parse()
*/