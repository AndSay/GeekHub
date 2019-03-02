var express = require ('express');
var server = express();
server.listen(888);


var BodyParser =require('body-parser');

server.use(express.static('public'));

server.use(BodyParser.urlencoded({extend:true}));


// server.post('/create-user', function (request,response) {
// if (request.body.nick !=''&&request.body.nick !='User name'){
//     response.sendFile(__dirname+'/public/succses.html');
// } else{
//     response.sendFile(__dirname+'/public/error.html');
// }

    // server.post('/create-user', function (request,response) {
    //     if (request.body.nick !=''&&request.body.nick !='User name'){
    //         response.json({id: 1, name: request.body.nick});
    //     } else{
    //         response.status(500).json({id: 1, name: 'wrong name'});
    //     }

  //   let a = require ('./test');
  // //  response.send('<div>'+a+'</div>');
  //   response.sendFile('G:\\geekhub\\GeekHub\\npm_server\\public\\index.html');

const MongoClient = require("mongodb").MongoClient;
// создаем объект MongoClient и передаем ему строку подключения
global.mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });



// реакция на кнопки
server.post('/add-food', require('./DB_JS_comand/add.js'));
server.post('/menu', require('./DB_JS_comand/menu.js'));
server.post('/del', require('./DB_JS_comand/del.js'));
server.post('/add', require('./DB_JS_comand/bld_add.js'));
console.log("server ok");
// server.post('/bf', require('./DB_JS_comand/bf.js'));
// server.post('/lanch', require('./DB_JS_comand/lanch.js'));
// server.post('/diner', require('./DB_JS_comand/diner.js'));







