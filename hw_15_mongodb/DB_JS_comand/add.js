module.exports=function (request,response) {
    let res=request.body;
    // const MongoClient = require("mongodb").MongoClient;
    // // создаем объект MongoClient и передаем ему строку подключения
    // const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

    if (res.Food !=''&&res.cal !=''){


        global.mongoClient.connect(function (err, client) {
            const db = client.db("foodcal");
            //console.log(db);
           // response.json(db);
            const collection = db.collection("food");
            collection.find(function(err, results){
                console.log(results);
            });
            console.log(collection);
            //response.json(collection);
            let food = {Name: res.Food, Cal: res.cal};
            //console.log(food);
            //response.json(food);
            collection.insertOne(food, function (err, result) {

                if (err) {
                    response.status(500).json({ name: 'DB wrong name'});
                    return console.log(err);
                }
                response.json({ name: res.Food, cal: res.cal});
                //response.json(result.ops);
                //console.log(result.ops);

            });
            //client.close();
        });


    } else{
        response.status(500).json({id: 1, name: 'DB wrong name'});
    }
}