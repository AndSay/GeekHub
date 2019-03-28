//          PenguinView


// отображение елементов сохраньоных в память


import dragdrop from "./PenguinModel/dragdrop";

function locLoading_PenguinView (ind, tdList) {                                 // отображение елементов сохраньоных в память
console.log("2 ok");

    let tab = document.createElement('li');
    let TextIn = document.createElement('label');
    let check = document.createElement('input');
    let time = document.createElement('label');

    let EditButton = document.createElement('button');
    let DeleteButton = document.createElement('button');
    console.log("3 ok");


    EditButton.type = "button";
    EditButton.innerHTML = "Edit";
    EditButton.id = "Edit" + ind;
    EditButton.style.position = 'absolute';
    EditButton.style.left=387+'px';

    console.log("4 ok");
    DeleteButton.type = "button";
    DeleteButton.innerHTML = "DELETE";
    DeleteButton.id = "DELETE" + ind;
    DeleteButton.style.position = 'absolute';
    DeleteButton.style.left=428+'px';

    check.type = "checkbox";
    check.id = "checkbox" + ind;

    console.log("5 ok");
    TextIn.innerHTML = tdList.text;
    TextIn.id = "text" + ind;
    TextIn.type="text";
    TextIn.for = "checkbox" + ind;

    console.log("6 ok");
    time.innerHTML = tdList.time;
    time.id = "time" + ind;
    time.type="text";
    time.for = "checkbox" + ind;

    tab.type = "li";
    tab.id = "li" + ind;

    tab.style.height= 20 +'px';
    tab.style.width= '497px';


    console.log("7 ok");

    tab.style.background='white';
    tab.style.position = 'absolute';

    tab.style.border= '1px solid black';
    tab.style.padding= '0px';
    console.log(tdList.pos);
    tab.style.top= tdList.pos;
    console.log("8 ok");


    dragdrop(tab,ind);


    list.appendChild(tab);
    tab.appendChild(check);
    tab.appendChild(TextIn);
    tab.appendChild(time);
    tab.appendChild(EditButton);
    tab.appendChild(DeleteButton);
    console.log("2 finish ok")
}
export default locLoading_PenguinView;