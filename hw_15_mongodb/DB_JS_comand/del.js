
module.exports=function (request,response) {
    let res=request.body;
    console.log("del ok");
    console.log(res);

    // var mongodb = require('mongodb');

    global.mongoClient.connect(function (err, client) {
            console.log("menu ok 2");
            const db = client.db("foodcal");
            // let collection;
            if (res.type == "Del_menu"){
                // collection = db.collection("food");
                del(res,db.collection("food"),"id");
                del(res,db.collection("brackfast"),"id_food");
                del(res,db.collection("lanch"),"id_food");
                del(res,db.collection("diner"),"id_food");
            }else if (res.type == "Del_bf") {

                del(res,db.collection("brackfast"),"id");

            }else if (res.type== "Del_Lunch") {

                del(res,db.collection("lanch"),"id");

            }else if (res.type== "Del_Dinner") {

                del(res,db.collection("diner"),"id");

            }
            console.log("menu ok 3");
            response.json({rs:"ok"});



            // collection.find().toArray(function(err, results){
            //         console.log(results);
            //         response.json(results);
            //     });
            // }
            //
            //      if (err) {
            //          response.status(500).json({name: 'DB wrong name'});
            //          return console.log(err);
            //      }

        });




    function del(res,collection,type) {
        let mongodb = require('mongodb');
        console.log(type);
        if (type == "id") {
            collection.deleteOne({_id: new mongodb.ObjectID(res.id)}, function (err, result) {
                console.log(result);
                console.log(err);
                // response.json(result);
                // response.json(err);
                //client.close();
            });
        }else if(type == "id_food") {
            collection.deleteMany({id_food: res.id}, function (err, result) {
                console.log(result);
                console.log(err);
                // response.json(result);
                // response.json(err);
                //client.close();
            });
        }
    }
}
