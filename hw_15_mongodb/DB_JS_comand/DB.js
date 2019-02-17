module.exports=function (mongoClient) {
    console.log('Finaly sucsses')
    mongoClient.connect(function (err, client) {
        const db = client.db("foodcal");
        const collection = db.collection("food");

        let food = {Name: res.name, Cal: res.cal};
        collection.insertOne(food, function (err, result) {

            if (err) {
                return console.log(err);
            }
            console.log(result.ops);
        });
    });
}