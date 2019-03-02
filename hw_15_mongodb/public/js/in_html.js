//тут вивод  даних на екран

function menu_html (element,type) {

    if (document.getElementById(element._id) != null) {
        console.log("done");
    } else {
        // console.log(element);
        let li = document.createElement('li')
        let FoodName = document.createElement('label');
        let FoodCal = document.createElement('label');


        li.id = element._id;
        li.className = "row mt-3";


        FoodName.innerHTML = element.Name;
        FoodName.className = "col-7";
        FoodCal.innerHTML = element.Cal;
        FoodCal.className = "col-2"
        FoodCal.value= element.Cal;
        document.getElementById("Sum_KCal").innerText=+document.getElementById("Sum_KCal").innerText + +element.Cal

        document.getElementById('DataBase').appendChild(li);
        li.appendChild(FoodName);
        li.appendChild(FoodCal);


        let DeleteButton = document.createElement('button');
        DeleteButton.innerHTML = "Del";
        DeleteButton.name = "Del_"+type;
        DeleteButton.className = "btn btn-dark col ml-2";
        li.appendChild(DeleteButton);


        if (type == "menu") {

            let BFButton = document.createElement('button');
            let LanchButton = document.createElement('button');
            let DinerButton = document.createElement('button');


            BFButton.innerHTML = "BF";
            LanchButton.innerHTML = "Lunch";
            DinerButton.innerHTML = "Dinner";


            BFButton.name = "BF";
            LanchButton.name = "Lunch";
            DinerButton.name = "Dinner";


            BFButton.className = "btn btn-dark col ml-2";
            LanchButton.className = "btn btn-dark col ml-2";
            DinerButton.className = "btn btn-dark col ml-2";

            li.appendChild(BFButton);
            li.appendChild(LanchButton);
            li.appendChild(DinerButton);
        }
    }
}


function day_html (result,type) {
    if (type=="menu"){
        result.forEach(function (element) {
            menu_html(element,type);
        });
    }else {

        // console.log(result)

            jQuery.ajax({
                method: 'POST',
                url: '/menu',
                data: {type: 'menu'},
                success: function (result_menu) {
                    document.getElementById("Sum_KCal").innerText = "0";
                    result.forEach(function (element) {
                        for (let i = 0; i < result_menu.length; i++) {
                            element.Name = result_menu[i].Name;
                            element.Cal = result_menu[i].Cal;
                            if (result_menu[i]._id == element.id_food) {
                                menu_html(element, type);
                                CalCalk(type, element.Cal);
                            }
                        }
                    });
                    // console.log(result);
                },
                error: function (error) {
                    console.log('menu error');
                    error;
                }
            });
            // console.log("html");
            // await menu;


    }
}
