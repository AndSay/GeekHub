//сценарій - лист в групу підтримки

let { WizardScene, bot, users} = require('../module_requirer');
let { check} = require ('../functions');
let {main_menu} = require('../menu_butons');


let mail_team = new WizardScene(
    "mail_team", //
    (ctx) => {
        ctx.deleteMessage();
        ctx.reply('Я уважно тебе слухаю.');
        return ctx.wizard.next(); // Переходим к следующему обработчику.
    },
    (ctx) => {
        check(ctx, () => {
            try {
                bot.telegram.sendContact(users.write_me_mail_team.user_id, users[ctx.from.id].telephone, users[ctx.from.id].name);
                bot.telegram.sendMessage(users.write_me_mail_team.user_id, 'Лист в групу підтримки');
                bot.telegram.sendMessage(users.write_me_mail_team.user_id, ctx.message.text);
                ctx.reply('Окай..... Я тобі ще чимось можу допомогти', main_menu);
            } catch (err) {
                ctx.reply('Вибач, але щось пішло не так, твій лист не був надісланий тому спроюуй щераз трохи пізніше.', main_menu);
            }
        });
        return ctx.scene.leave(); // Переходим к следующему обработчику.
    }
);

module.exports = {mail_team};