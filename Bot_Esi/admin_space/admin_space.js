// пасхалочка)))
module.exports = ()=> {
    let {Markup, bot, users, DBclient} = require('../module_requirer');
    let {new_message, check} = require ('../functions.js');

    users.AndSee = {
        phone_number: '+380631576149',
        first_name: 'Allex',
        user_id: 353593801
    };

    let egg_button = Markup.inlineKeyboard([[
        Markup.callbackButton('Розкажи про мене', 'inform')],
        [Markup.callbackButton('Скільки людей зареєструвалось?', 'how_many')],
        [Markup.callbackButton('Хто відповідає за тех підтримку', 'tex_inform')],
        [Markup.callbackButton('Відправ повідомлення ', 'send_Message')],
        [Markup.callbackButton('Зробити розсилку ', 'send_Message_to_all')]//,
    ])
        .oneTime()
        .resize()
        .extra();

    bot.command('admin', (ctx) => {check(ctx,()=>{
        if(ctx.from.id == users.AndSee.user_id || users[ctx.from.id].role == '1') {
             THIS_IS_POWER(ctx);
        }else{
            console.log(users[ctx.from.id]);
            new_message(ctx);
        }
    })
    });
    bot.hears('admin', (ctx) => {check(ctx,()=>{
        if(ctx.from.id== users.AndSee.user_id || users[ctx.from.id].role == '1') {
            THIS_IS_POWER(ctx);
        }else{
            console.log(users[ctx.from.id]);
            new_message(ctx);
        }
    })
    });

    function THIS_IS_POWER(ctx) {

        users[ctx.from.id].name = 'Владика';
        ctx.reply('що я можу для тебе зробити, мій Владика',egg_button);

    }
//
    bot.action('admin_function', (ctx) => {

        });
    // });



// Скажи скільки людей в базі даних
    bot.action('how_many', (ctx) => {
        DBclient.query('SELECT * FROM users', function (err, result) {
            ctx.reply('На дану мить в моїй базі ' + result.length + ' користувачів.');
        });
    });
// Мій контакт
    bot.action('inform', (ctx) => bot.telegram.sendContact(ctx.from.id, users.AndSee.phone_number, users.AndSee.first_name));
    // отримати інформаацію про відділ технічної підтримки
    bot.action('tex_inform', (ctx) => {
        bot.telegram.sendContact(ctx.from.id, users.call_me.phone_number,'Зателефонуй мені: \n' +  users.call_me.first_name);
        bot.telegram.sendContact(ctx.from.id, users.visit_me.phone_number,'Приїдь до мене: \n' + users.visit_me.first_name);
        bot.telegram.sendContact(ctx.from.id, users.write_me_mail_improvement.phone_number, 'Пропозиції: \n' + users.write_me_mail_improvement.first_name);
        bot.telegram.sendContact(ctx.from.id, users.write_me_mail_team.phone_number, 'Група підтримки: \n' + users.write_me_mail_team.first_name);
    });


    bot.action('send_Message_to_all', (ctx) => {
        try {
            ctx.scene.enter("send_Message_to_all");
        }catch (err){
            console.log(err);
        }
    });

    bot.action('cancel_scene', (ctx) => {
        ctx.scene.leave();
    });

    bot.action('send_Message', (ctx) => {
        try {
            ctx.scene.enter("send_Message");
        }catch (err){
            console.log(err);
        }
    });
}