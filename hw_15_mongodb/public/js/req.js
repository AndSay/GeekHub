;(function(){
/// тут додавання елементу в базу даних
    function request_json(name) {
        let jname='#'+name;
        var createFoodForm=jQuery(jname);

        createFoodForm.on('submit',function (event) {
            event.preventDefault();

            jQuery.ajax({
                method: 'POST',
                url: '/'+name,
                data: createFoodForm.serialize(),
                success: function (result) {
                    let res=result;
                    // console.log(res);
                    document.getElementById("AddFood").value='';
                    document.getElementById("AddCal").value='';
                },
                error: function (error) {
                    error;
                }

            });

        });
    }
    request_json('add-food');

    //request_json('menu');
    // request_json('bf');
    // request_json('lanch');
    // request_json('diner');
})();

