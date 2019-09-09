let { WizardScene,  bot, users} = require('../module_requirer');
let {cancel_scene, main_menu} = require('../menu_butons');


let send_Message = new WizardScene(
    "send_Message", //
    (ctx) => {
        ctx.deleteMessage();
        ctx.reply('Кому ти хочеш відпривити повідомлення, скинь мені контакт. (для відправки повідомлення людини має бути зареєстрована в моїй базі.)',cancel_scene);
        return ctx.wizard.next(); // Переходим к следующему обработчику.
    },
    (ctx) => {
        try {

            if (ctx.message.contact != null) {
                console.log(ctx.message.contact);
                users.egg = {
                    __proto__: users.proto,
                    id: ctx.message.contact.user_id,
                    name: ctx.message.contact.first_name
                };
                ctx.deleteMessage();
                ctx.reply('Введи текст повідомлення',cancel_scene);
                return ctx.wizard.next(); // Переходим к следующему обработчику.
            } else {
                ctx.deleteMessage();
                return ctx.reply('Не коректний формат, спробуй ще раз. ',cancel_scene );
            }
        } catch (err) {
            try {
                ctx.deleteMessage();
                ctx.reply('Що далі? ',main_menu);
                return ctx.scene.leave();
            }catch (e) {
                
            }
             
        }
    },
    (ctx) => {
        try {
            if (ctx.message.text != null) {
                ctx.deleteMessage();
                bot.telegram.sendMessage(users.egg.id, ctx.message.text);
                ctx.reply('Твоє повідомлення для ' + users.egg.name + ' відправлено. ');
                users.egg.del();
                return ctx.scene.leave();
            } else {
                users.egg.del();
                return ctx.scene.leave();
            }
        } catch (err) {
            ctx.deleteMessage();
            return ctx.reply('Щось пішло не так, спробуй щераз. ');
            return ctx.scene.leave();
        }
    }
);
 module.exports = {send_Message};