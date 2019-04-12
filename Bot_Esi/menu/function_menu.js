// меню передачі даних лічильників

module.exports = ()=> {
    let { Markup,  bot, users, chat_room} = require('../module_requirer');
    let { check} = require ('../functions');

    // реакція на кнопуку "Функции"
    bot.action('enter_chat_room', (ctx) =>{check(ctx, ()=>{ctx.deleteMessage();
        ctx.reply(users[ctx.from.id].name + ', ти хочеш зайти в чат кімнату, проте не забувай, що через 2 хвилини після твого останього повідомлення тебе кікнуть і потрібно буде в неї зайти заново, проте якщо ти захочеш вийти введи команду "/stop"', Markup.inlineKeyboard([
            [Markup.callbackButton('Добре, поїхали','enter_chat_room_yes')],
            [Markup.callbackButton('Назад','function_menu')],
            [Markup.callbackButton('Повернутись в головне меню', 'beck_in_first_menu')]
        ])
            .resize()
            .extra())})});


    bot.action('enter_chat_room_yes', (ctx) =>{check(ctx, ()=>{
        if (users[ctx.from.id].chat!='on') {
            chat_room[chat_room.length] = users[ctx.from.id];
            users[ctx.from.id].chat = 'on';

            for (let i = 0; i <= chat_room.length; i++) {
                try {
                    let j = 0;
                    for (let i = 0; i <= chat_room.length; i++) {
                        if (chat_room[i] != null) {
                            j += 1;
                        }
                    }
                    bot.telegram.sendMessage(chat_room [i].id, 'В чат зайшов ' + users[ctx.from.id].name + ', тепер у чаті ' + chat_room.length + ' людей.');
                } catch (err) {
                }
            }
        }
    })});

}