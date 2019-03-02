(function($) {




    document.addEventListener('DOMContentLoaded', function () {


        //document.getElementById("DataBase").addEventListener('click', Button);
        //document.getElementById("menu").addEventListener('click', menu_Button);
        //удаление елемента

        function menu_Button(EventTarget) {
            let ET=EventTarget.target;
            console.log(ET.innerText);

            if (ET.innerText == "Menu") {
                let i ={ type: 'menu' };
                add_in_menu(i,"menu");
            } else if ( ET.innerText == "BF" ) {
                let i ={type: 'bf'};
                add_in_menu(i,"menu");
            }else if ( ET.innerText == "Lunch" ) {
                let i ={type: 'Lunch'};
                add_in_menu(i,"menu");
            }else if ( ET.innerText == "Dinner" ) {
                let i ={type: 'Dinner'};
                add_in_menu(i,"menu");
            }
        }

        function Button(EventTarget) {                                    //удаление елемента
            let ET=EventTarget.target;
            console.log(ET);
            console.log(ET.innerText);
            if (ET.name == "Del") {
                 let i ={id:ET.parentElement.id};
                ET.parentElement.remove();
                console.log("start delete");
                add_in_menu(i,"del");
            } else if(ET.name == "BF"){
                let i ={id:ET.parentElement.id,type:"bf"};
                add_in_menu(i,"add");
            }else if(ET.name == "Lunch"){
                let i ={id:ET.parentElement.id,type:"lunch"};
                add_in_menu(i,"add");
            }else if(ET.name == "Dinner"){
                let i ={id:ET.parentElement.id,type:"dinner"};
                add_in_menu(i,"add");
            }
        }

        function add_in_menu(dat,UL) {
            $.ajax({
                url: "/" + UL,
                data: dat,
                type: 'POST',
                jsonpCallback: 'callback',
                success: function (result) {
                    console.log(result);
                },
                error: function (error) {
                    console.log('button error:' + error);
                    console.table()

                }
            });
        }
                //кнопка удаление


    });


})(jQuery)