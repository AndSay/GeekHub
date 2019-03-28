//          PenguinController
import Delete_Button from "./PenguinModel/Delete_Button";
import Edite_Button from "./PenguinModel/Edite_Button";
import Sort_Button from "./PenguinModel/Sort_Button";
import revers from "./PenguinModel/revers";
import addlist from "./PenguinModel/addlist";

let exp = ()=> {
console.log('test export');

    document.getElementById('ReversButton').addEventListener('click', revers);                   //кнопка реверса
    document.getElementById('SortButton').addEventListener('click', Sort_Button);              // кнопка сортування

    document.getElementById('list').addEventListener('click', function () {
        let EventTarget = event.target;
        if (EventTarget.type == "button") {
            if (EventTarget.innerHTML == "DELETE") {
                Delete_Button(EventTarget);                         //кнопка удаления
            } else if (EventTarget.innerHTML == "Sort") {
                Edite_Button(EventTarget);                          //кнопка изменения
            }
        }
    });
    document.getElementById('AddButton').addEventListener('click', addlist);
    // document.getElementById('addTask').addEventListener('submit', addlist);                        //кнопка добавить задачу
};
export default exp;