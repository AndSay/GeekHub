;(function() {
    var createFoodForm = jQuery('#menu');
    let i;
////            тут реакції на кнопки визова меню
    document.getElementById("menu").addEventListener('click', menu_Button);
    document.getElementById("DataBase").addEventListener('click', Button);
/// кнопочки в строках таблицы



//кнопочки главного меню
    function menu_Button(EventTarget) {
        let ET = EventTarget.target;
        // console.log(ET.name);

        if (ET.name == "Menu") {
            i = {type: 'menu'};
            console.log(i);
            // add_in_menu(i,"menu");
        } else if (ET.name == "BF") {
            i = {type: 'bf'};
            console.log(i);
            //add_in_menu(i,"menu");
        } else if (ET.name == "Lunch") {
            i = {type: 'Lunch'};
            console.log(i);
            //add_in_menu(i,"menu");
        } else if (ET.name == "Dinner") {
            i = {type: 'Dinner'};
            console.log(i);
            //add_in_menu(i,"menu");
        }
    }


/// кнопочки в строках таблицы




    createFoodForm.on('submit', function (event) {
        event.preventDefault();
        jQuery.ajax({
            method: 'POST',
            url: '/menu',
            data: i,
            success: function (result) {
                console.log('result');
                console.log('menu success');
                let chil = document.getElementById('DataBase').children;
                while (chil.length !== 0) {
                    chil[0].remove();
                }

                    day_html(result,i.type);


            },
            error: function (error) {
                console.log('menu error');
                error;
            }
        });
    });
})();

