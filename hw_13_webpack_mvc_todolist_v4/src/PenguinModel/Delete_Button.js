
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
        export default Delete_Button;