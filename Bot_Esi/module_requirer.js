
let mysql = require('mysql');
let Telegraf  = require('telegraf');
let session = require("telegraf/session");
let Stage = require("telegraf/stage");
let WizardScene = require("telegraf/scenes/wizard");
let { Markup, Telegram } = Telegraf;
// токен бота
let mysql_connect_param = require('./mysql_connect_config');
let DBclient=mysql.createConnection(mysql_connect_param);
connect(DBclient);
function connect (DBclient){
    DBclient.connect(function(err) {
        if (err) {
            let mysql_connect_param2={
                host: mysql_connect_param.host,
                user: mysql_connect_param.user,
                password: mysql_connect_param.password
            };
            DBclient=mysql.createConnection(mysql_connect_param2);
            console.log("Connected Error!");
            DBclient.connect(function(err) {
                if (err) console.log(err)
                DBclient.query('CREATE DATABASE ' + mysql_connect_param.database, function (err, result) {
                    if (err) throw err;
                    console.log("Database created");
                    DBclient.end();
                    DBclient=mysql.createConnection(mysql_connect_param);
                    connect(DBclient);
                    DBclient.query("CREATE TABLE `"+ mysql_connect_param.database + "`.`users` ( `id` INT NOT NULL AUTO_INCREMENT ,  `name` VARCHAR(50) NOT NULL ,  `telephone` VARCHAR(20) NOT NULL ,  `telegram_id` INT NOT NULL ,  `reminder` TINYINT NOT NULL DEFAULT '1' , `role` TINYINT NOT NULL DEFAULT '0' ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB;");
                });
            });

        }

    });
}
let token = require('./token');
let bot = new Telegraf (token);
let users = require('./users_prototype.js');
let chat_room = [];



module.exports = {session, Stage, WizardScene, Markup, Telegram, bot, users, Telegraf, DBclient, chat_room};
