
//проверка текста в строке ввода и визов функции загрузки елемента
import addlist_PenguinView from "./addlist_PenguinView";

function addlist() {                                                    //проверка текста в строке ввода и визов функции загрузки елемента
    let text = document.getElementById('textIN').value;
    if (text!='') {
        addlist_PenguinView(text);
    }
}

export default addlist;
