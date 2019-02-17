module.exports=function (request,response) {
    let res = request.body;
    //console.log("menu ok");
    //console.log(res);
    console.log(res.type);


    global.mongoClient.connect(function (err, client) {
        console.log("START");
        const db = client.db("foodcal");
        let collect;
        console.log(res);
        if (res.type == 'menu') {
             collect = db.collection("food");
            console.log("menu is ok");
        } else if (res.type == 'bf') {
             collect = db.collection("brackfast");
            console.log("bf is ok");
        } else if (res.type == 'Lunch') {
             collect = db.collection("lanch");
            console.log("lunch is ok");
        } else if (res.type == 'Dinner') {
             collect = db.collection("diner");
            console.log("diner is ok");
        } else {
             collect = db.collection("diner");
            console.log(" ERROR");
        }
        const collection=collect;
        console.log("finish");

        //console.log(collection);

        if (err) {
            response.status(500).json({name: 'DB wrong name'});
            return console.log(err);
        }

        // let resul;
        // collection.find().toArray(function (err, results) {
        //     resul=results;
        // });
        // resul.forEach(function (elem,i) {
        //     console.log(elem.id_food);
        //     console.log(db.collection("food").find({_id: new mongodb.ObjectID(elem.id_food)}));
        // })


        collection.find().toArray(function (err, results) {
            results.forEach(function (elem,i) {
                console.log(elem.id_food);
                // let elem_food = db .collection("food").find({_id: new mongodb.ObjectID(elem.id_food)}).toArray(function (err, results) {
                //     console.log(results);
                // });
                //
                // res[i]={
                //     Name:elem_food.Name,
                //     Cal:elem_food.Cal,
                //     _id: elem._id,
                //     id_food: elem.id_food
                // }
                // console.log(res[i]);

            })

            response.json(results);
        });

        //client.close();
    });
}
