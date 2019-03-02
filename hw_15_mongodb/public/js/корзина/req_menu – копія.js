;(function(){

        let name='menu';
        let jname='#'+name;
        var createFoodForm=jQuery(jname);




        createFoodForm.on('submit',function (event) {
            event.preventDefault();




            
            jQuery.ajax({
                method: 'POST',
                url: '/'+name,
                data: createFoodForm.serialize(),
                success: function (result) {
                    console.log('result');
                    console.log('menu success');
                    let chil=document.getElementById('DataBase').children;
                    while (chil.length!==0){
                        chil[0].remove();
                    }
                    result.forEach(function(element) {
                        if (document.getElementById(element._id)!=null){
                            console.log("done");
                        }else {
                            console.log(element);
                            let li = document.createElement('li')
                            let FoodName = document.createElement('label');
                            let FoodCal = document.createElement('label');
                            let DeleteButton = document.createElement('button');
                            let BFButton = document.createElement('button');
                            let LanchButton = document.createElement('button');
                            let DinerButton = document.createElement('button');

                            li.id = element._id;
                            li.className = "row mt-3";


                            FoodName.innerHTML = element.Name;
                            FoodName.className = "col-7";
                            FoodCal.innerHTML = "   " + element.Cal + "  KCal";
                            FoodCal.className = "col-2"


                            DeleteButton.innerHTML = "Del";
                            BFButton.innerHTML = "BF";
                            LanchButton.innerHTML = "Lunch";
                            DinerButton.innerHTML = "Dinner";

                            DeleteButton.className = "btn btn-dark col ml-2";
                            BFButton.className = "btn btn-dark col ml-2";
                            LanchButton.className = "btn btn-dark col ml-2";
                            DinerButton.className = "btn btn-dark col ml-2";

                            document.getElementById('DataBase').appendChild(li);
                            li.appendChild(FoodName);
                            li.appendChild(FoodCal);
                            li.appendChild(DeleteButton);
                            li.appendChild(BFButton);
                            li.appendChild(LanchButton);
                            li.appendChild(DinerButton);
                        }
                    });

                },
                error: function (error) {
                    console.log('menu error');
                    error;
                }

            });





        });






})();

