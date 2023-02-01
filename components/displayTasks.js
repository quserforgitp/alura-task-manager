import { createTask } from "./addTask.js";
import { uniqueDates,orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () => {

    const list = document.querySelector(["[data-list]"]);
    
    const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasklist);

    orderDates(dates);
    
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

//fin de la clase04
/* conocimientos clase04
    1.-Filtrar elementos de un arreglo
    2.-Ordenar los elementos del LocalStorage
*/