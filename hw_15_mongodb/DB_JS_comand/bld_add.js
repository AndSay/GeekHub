module.exports=function (request,response) {
    let res=request.body;
    if (res.Food !=''&&res.cal !=''){


        global.mongoClient.connect(function (err, client) {
            let type;
            console.log(res.type);
            if (res.type=="bf") {
                 type="brackfast";
            }else if (res.type=="lunch") {
                 type="lanch";
            }else if (res.type=="dinner") {
                type="diner";
            }
            console.log(type);
            console.log(res);
            console.log(res.id);
            const db = client.db("foodcal");
            const collection = db.collection(type);
            collection.find(function(err, results){
                //console.log(results);
            });
            let food = {id_food: res.id};
            collection.insertOne(food, function (err, result) {
                if (err) {
                    response.status(500).json({ name: 'DB wrong name'});
                    return console.log(err);
                }
                response.json(food);
            });
        });
    } else{
        response.status(500).json({id: 1, name: 'DB wrong name'});
    }
}