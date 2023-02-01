import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () => {

    const list = document.querySelector(["[data-list]"]);
    
    const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasklist);
    
    dates.forEach(date => {
        const dateMoment = moment(date,"DD/MM/YYYY");
        list.appendChild(dateElement(date));

        tasklist.forEach((task) => {
            const taskDate = moment(task.dateFormat,"DD/MM/YYYY");

            const diff = dateMoment.diff(taskDate);
            if (diff === 0) {
                list.appendChild(createTask(task));   
            }
        });

    });

}

//fin de la clase03
/* conocimientos clase03
    1.-Recorrer el arreglo con forEach() de las tareas guardadas en LocalStorage
    2.-Utilizar pipe
    3.-Convertir las tareas almacenadas en formato string a objetos con JSON.parse()
*/