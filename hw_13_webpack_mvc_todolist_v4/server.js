var express = require ('express');
var server = express();
server.listen(888);

var BodyParser =require('body-parser');

server.use(express.static('public'));

server.use(BodyParser.urlencoded({extend:true}));
// response.sendFile('./index.html');