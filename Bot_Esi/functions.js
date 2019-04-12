// реєстрація нового користувача
let { Markup, bot, users, DBclient, chat_room} = require('./module_requirer');
let {main_menu} = require('./menu_butons');

function reg (ctx) {
    users[ctx.from.id].reminder = '1';
    console.log('Data: ' + users[ctx.from.id] + 'ctx: ' + ctx.from);
    DBclient.query('INSERT INTO users SET ?', users[ctx.from.id], function (err, result) {
        users[ctx.from.id].__proto__=users.proto;
        users [ctx.from.id].timer();
        if(err){
            ctx.reply('Вибач, щось пішло не так. Спробуй щераз.');
            console.log(err);
        }
    });
}
// зміна імені користувача
function rename(ctx) {
    DBclient.query('UPDATE users SET name = "'+ ctx.message.text + '" WHERE users.telegram_id = ' + ctx.from.id, function (err, result) {
        if(err){
            ctx.reply('Вибач, щось пішло не так. Повтори свою спробу трохи пізніше');
            console.log(err);
        }else {
            ctx.reply('Від нини ти для мене "'+ users[ctx.from.id].name, main_menu) + '"';
        }
    });
}
// авторизація користувача
function import_user(ctx,func) {
    console.log('start');
    if (users [ctx.from.id]==null) {
        let id = ctx.from.id;
        DBclient.query('SELECT * FROM users WHERE telegram_id = ' + id, function (err, result) {
            console.log(result);
            if (err) {
                return console.log(err);
            }
            if (result[0] != null) {
                users[ctx.from.id] = {};
                users[ctx.from.id].__proto__ = users.proto;
                users[ctx.from.id].id = result[0].telegram_id;
                users[ctx.from.id].name = result[0].name;
                users[ctx.from.id].telephone = result[0].telephone;
                users[ctx.from.id].reminder = result[0].reminder;
                users[ctx.from.id].role = result[0].role;
                console.log(users[ctx.from.id]);
                if (typeof func != 'undefined') {
                    func();
                }
                return 'ok';
            }else {
                hi(ctx);
                return 'hi';
            }
        });
    }else {
        if (typeof func != 'undefined') {
            func();
        }
        return 'ok';
    }
}
//допомога,  список команд
function help (ctx){
    console.log(ctx.from);
    ctx.reply('Привіт. Мене звати Есі, я твій особистий помічник, круто так? Ех, мені б самому помічника отримати...    ' +
        '\n Гаразд, зараз я тобі розповім про все, що ми можемо робити.' +
        '\nДля початку, привітайся зі мною "/hi", "Привіт" чи "Привет" і я відповім.' +
        '\nТи можеш змінити свій нік, написавши мені: "Від нині називай мене" або "/name".' +
        '\nТакож, ти завжди можеш повернутись до головного меню, якщо загубився, для цього просто скажи мені щось.', main_menu);
}
// старт
function start(ctx) {
    ctx.reply('Привіт. Що я для тебе можу зробити?',main_menu);

}
// привіт
function hi (ctx){
    console.log(users [ctx.from.id]);
    if (users [ctx.from.id] != null){
        ctx.reply('Привіт ' + users[ctx.from.id].name + ' чим я можу тобі допомогти?',main_menu);
    } else {
        ctx.reply('Привіт, ' + ctx.from.first_name + ', Я Есі . Ми ще не знайомі, Я можу використовувати це ім`я "'+ ctx.from.first_name +'", чи ти хочеш це змінити?', Markup.inlineKeyboard([
            Markup.callbackButton(ctx.from.first_name, 'cal_this_name'),
            Markup.callbackButton ("Зміни моє імя","cal_rename" )
        ]).extra());
    }
}
//відповідь на любе незрозуміле повідомлення
function new_message(ctx){
    ctx.reply('Вибач ' + users[ctx.from.id].name + '. Я тебе не розумію, можливо, тобі потрібна допомога: /help',main_menu);
}
// перевірка авторизації
function check(ctx,func) {
    if (users [ctx.from.id]!=null) {
        func(ctx);
        users [ctx.from.id].timer();
    } else {
     import_user(ctx, () =>  {
            func(ctx)
        })
    }
}
// Запит на зателефонуйте мені
function call_me(ctx){
    bot.telegram.sendMessage (users.call_me.user_id,'Прохання передзвонити');
    bot.telegram.sendContact (users.call_me.user_id,users[ctx.from.id].telephone,users[ctx.from.id].name);
    ctx.deleteMessage();
    ctx.reply('Я передав твоє прохання. Я тобі ще чимось можу допомогти?',main_menu);
}

function visit_me(ctx){
    bot.telegram.sendMessage (users.visit_me.user_id,'Запрошення вийти на прогулянку');
    bot.telegram.sendContact (users.visit_me.user_id,users[ctx.from.id].telephone,users[ctx.from.id].name);
    ctx.deleteMessage();
    ctx.reply('Я передав твоє запрошення. Я тобі ще чимось можу допомогти?',main_menu);
}
function reminder_on_off(ctx,val){
    console.log(val);
    let id = ctx.from.id;
    let reminder
    if (val=='on'){
        reminder = '1';
    } else if (val=='off'){
        reminder = '0';
    }
    DBclient.query('UPDATE users SET reminder = "'+ reminder + '" WHERE users.telegram_id = ' + id, function (err, result) {
        if(err){
            ctx.reply('Вибач, щось пішло не так. Повтори свою спробу трохи пізніше');
            console.log(err);
        }else {
            ctx.deleteMessage();
            ctx.reply(users[ctx.from.id].name + ', Налаштування зміненні. Щось ще?',main_menu);
        }
    });
}

function send_message_to_chat (ctx){
    let msg;
    if (ctx.message.text != null) {
        msg = users[ctx.from.id].name + ': \n' + ctx.message.text;
        console.log(msg);
        for (let i = 0;i<chat_room.length;i++) {
            if (chat_room[i].id != ctx.from.id ) {
            bot.telegram.sendMessage(chat_room[i].id,msg);
            }
        }
    } else if(ctx.message.sticker != null){

        msg =  users[ctx.from.id].name + ': \n';
        console.log(msg + ' sticker');
        ctx.reply('Це я, Есі. ' + users[ctx.from.id].name+ ', вибач але моя чат кімната зараз не підтримує функцію відправки стікерів.')
    } else if(ctx.message.contact != null){
        msg = users[ctx.from.id].name + ': \n' ;
        ctx.reply('Це я, Есі. ' + users[ctx.from.id].name+ ', вибач але моя чат кімната зараз не підтримує функцію відправки контактів.')
    }

}


module.exports = {reg, rename, import_user, help, start, new_message, check, hi, call_me, visit_me, reminder_on_off, send_message_to_chat}