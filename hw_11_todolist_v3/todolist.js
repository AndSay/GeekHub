(function($) {
    document.addEventListener('DOMContentLoaded', function () {
        var todolist={};
        var size = 20;

        //          PenguinModel

        //обявление памяти на сохранение или вызав загрущика из памяти
        if(localStorage.getItem('len')==null) {
            localStorage.setItem('len', '' + 0);
        }else{
            for (let i = 1;i<=+localStorage.getItem('len');i++){
                let ret = locLoading(i);
                if(ret==false){
                    localStorage.setItem('len',i-1);
                    break;
                }
            }
        }


        let ul=document.getElementById("list");
        ul.style.padding= '0px';
        ul.style.position= 'relative';



        //загрузка з памяти
        function locLoading (ind){
            if (localStorage.getItem("checkbox"+ind)!='') {
                let tdList = {};
                todolist["TDL"+ind]=tdList;
                tdList.text = localStorage.getItem("text" + ind);
                tdList.time = localStorage.getItem("time" + ind);
                tdList.pos= localStorage.getItem("pos" + ind);;
                tdList.ind = ind;
                locLoading_PenguinView (ind,tdList)
            }else{
                let ret=locLoading_empty(ind);
                if(ret==true){
                    locLoading (ind);
                } else if (ret==false){
                    return false;
                }
            }

        }

        //использование пустых ячеекс памяти
        function locLoading_empty(ind){
            for(let i=ind+1;i<=+localStorage.getItem('len');i++){
                if (localStorage.getItem("checkbox"+i)!='') {

                    localStorage.setItem("checkbox"+ind,localStorage.getItem("checkbox"+i));
                    localStorage.setItem("checkbox"+i,'');
                    localStorage.setItem("text" + ind,localStorage.getItem("text" + i));
                    localStorage.setItem("text" + i,'');
                    localStorage.setItem("time" + ind,localStorage.getItem("time" + i));
                    localStorage.setItem("time" + i,'');
                    return true;
                }
            }
            return false;
        }

        //смена сортировки
        function revers() {                                             //смена сортировки
            console.log(todolist);
            let posit=[];
            let num=[];
            let j=localStorage.getItem('len')
            for (let i=1;i<=j;i++) {
                posit[i]=parseFloat (document.getElementById("li"+i).style.top);
                num[i]=i;
                console.log(posit[i]);
            }

            for (i=1;i<=j;i++) {
                for (let ii=1;ii<j;ii++) {
                    if (posit[ii]>posit[ii+1]){
                        [posit[ii],posit[ii+1]]=[posit[ii+1],posit[ii]];
                        [num[ii],num[ii+1]]=[num[ii+1],num[ii]];
                    }
                }
            }
            console.log(posit);
            console.log(num);
            for ( i=1;i<=j;i++) {
                document.getElementById("li"+num[j-i+1]).style.top=posit[i]+'px';
                localStorage.setItem("pos"+num[j-i+1],posit[i]+'px');

            }
        }

        //удаление елемента
        function Delete_Button(EventTarget){                                    //удаление елемента
            let i=EventTarget.id;
            i=+i.slice(6);
            console.log(i);
            console.log(EventTarget);
            localStorage.setItem("time"+i,'');
            localStorage.setItem("text"+i,'');
            localStorage.setItem("checkbox"+i,'');
            EventTarget.parentElement.remove();
        }

        //изминение елемента
        function Edite_Button(EventTarget){
            let i=EventTarget.id;
            i=+i.slice(4);
            console.log(i);
            console.log(EventTarget);

            localStorage.setItem("time"+i,'');
            localStorage.setItem("text"+i,'');
            localStorage.setItem("checkbox"+i,'');

            console.log(EventTarget.parentElement.childNodes[1]);
            console.log(EventTarget.parentElement.childNodes[0]);
            document.getElementById('textIN').value=EventTarget.parentElement.childNodes[1].innerHTML;
            EventTarget.parentElement.remove();
        }

        //упорядкувати
        function Sort_Button(){
            console.log(todolist);
            let posit=[];
            let num=[];
            let j=localStorage.getItem('len')
            for (let i=1;i<=j;i++) {
                posit[i]=parseFloat (document.getElementById("li"+i).style.top);
                num[i]=i;
                console.log(posit[i]);
            }

            for (i=1;i<=j;i++) {
                for (let ii=1;ii<j;ii++) {
                    if (posit[ii]>posit[ii+1]){
                        [posit[ii],posit[ii+1]]=[posit[ii+1],posit[ii]];
                        [num[ii],num[ii+1]]=[num[ii+1],num[ii]];
                    }
                }
            }
            console.log(posit);
            console.log(num);
            for ( i=1;i<=j;i++) {
                document.getElementById("li"+num[i]).style.top=size*i+'px';
                localStorage.setItem("pos"+num[i],size*i+'px');

            }
        }


        //проверка текста в строке ввода и визов функции загрузки елемента
        function addlist() {                                                    //проверка текста в строке ввода и визов функции загрузки елемента
            let text=document.getElementById('textIN').value;
            if (text!='') {
                addlist_PenguinView(text);
            }
        }


        //добавление елемента в память
        function addlist_PenguinView(text) {                            //добавление елемента в память
            let len;
            len=+localStorage.getItem('len')+1;
            len+='';
            localStorage.setItem('len',len);
            let now = new Date();
            localStorage.setItem("pos"+len,len*size+'px');
            localStorage.setItem("checkbox"+len,'false');
            localStorage.setItem("text"+len,text);
            localStorage.setItem("time"+len,':'+ ' '+  now.getDate()+'.'+now.getMonth()+'.'+now.getFullYear()+' '+' '+now.getHours()+':'+now.getMinutes());
            document.getElementById('textIN').value='';
            locLoading_PenguinView(len);


        }




        // drug and drop
        function dragdrop (obj,ind) {
            obj.onmousedown = function (e) { // 1. отследить нажатие
                console.log(event.target.type);
                if (event.target.type == "text") {
                    // подготовить к перемещению

                    obj.style.position = 'absolute';

                    moveAt(e);
                    obj.style.zIndex = 1000;
                    function moveAt(e) {
                        obj.style.top = e.pageY - obj.offsetHeight*3  + 'px';
                    }

                    //перемещение по экрану
                    document.onmousemove = function (e) {
                        moveAt(e);
                    }

                    // окончание переноса
                    obj.onmouseup = function () {
                        localStorage.setItem("sttop"+ind,obj.style.top);
                        obj.style.zIndex = 900;
                        localStorage.setItem("pos"+ind,obj.style.top);

                        document.onmousemove = null;
                        obj.onmouseup = null;
                    }
                }
            }
        }





        //          PenguinView


        // отображение елементов сохраньоных в память
        function locLoading_PenguinView (ind,tdList) {                                 // отображение елементов сохраньоных в память


            let tab = document.createElement('li')
            let TextIn = document.createElement('label');
            let check = document.createElement('input');
            let time = document.createElement('label');

            let EditButton = document.createElement('button');
            let DeleteButton = document.createElement('button');



            EditButton.type = "button";
            EditButton.innerHTML = "Edit";
            EditButton.id = "Edit" + ind;
            EditButton.style.position = 'absolute';
            EditButton.style.left=387+'px';


            DeleteButton.type = "button";
            DeleteButton.innerHTML = "DELETE";
            DeleteButton.id = "DELETE" + ind;
            DeleteButton.style.position = 'absolute';
            DeleteButton.style.left=428+'px';

            check.type = "checkbox";
            check.id = "checkbox" + ind;


            TextIn.innerHTML = tdList.text;
            TextIn.id = "text" + ind;
            TextIn.type="text";
            TextIn.for = "checkbox" + ind;


            time.innerHTML = tdList.time;
            time.id = "time" + ind;
            time.type="text";
            time.for = "checkbox" + ind;

            tab.type = "li";
            tab.id = "li" + ind;

            tab.style.height= 20 +'px';
            tab.style.width= '497px';




            tab.style.background='white';
            tab.style.position = 'absolute';

            tab.style.border= '1px solid black';
            tab.style.padding= '0px';
            console.log(tdList.pos);
            tab.style.top= tdList.pos;



            dragdrop(tab,ind);


            list.appendChild(tab);
            tab.appendChild(check);
            tab.appendChild(TextIn);
            tab.appendChild(time);
            tab.appendChild(EditButton);
            tab.appendChild(DeleteButton);
        }










        //          PenguinController



        reversbutt.addEventListener('click', revers);                   //кнопка реверса
        SortButton.addEventListener('click', Sort_Button);              // кнопка сортування

        list.addEventListener('click', function () {
            let EventTarget=event.target;
            if(EventTarget.type =="button"){
                if(EventTarget.innerHTML=="DELETE") {
                    Delete_Button(EventTarget);                         //кнопка удаления
                }else if (EventTarget.innerHTML=="Sort") {
                    Edite_Button(EventTarget);                          //кнопка изменения
                }
            }
        });

        addTask.addEventListener('submit', addlist);                        //кнопка добавить задачу


    });
})(jQuery)