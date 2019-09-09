//сценарій - лист з пропозиціями

let { WizardScene, bot, users} = require('../module_requirer');
let {check} = require ('../functions');
let {main_menu} = require('../menu_butons');


let mail_improvement = new WizardScene(
    "mail_improvement", //
    (ctx) => {
        ctx.deleteMessage();
        ctx.reply('Я уважно тебе слухаю.');
        return ctx.wizard.next(); // Переходим к следующему обработчику.
    },
    (ctx) => {
        check(ctx,()=> {
            try {
                bot.telegram.sendContact(users.write_me_mail_improvement.user_id, users[ctx.from.id].telephone, users[ctx.from.id].name);
                bot.telegram.sendMessage(users.write_me_mail_improvement.user_id, 'Лист з пропозиціями');
                bot.telegram.sendMessage(users.write_me_mail_improvement.user_id, ctx.message.text);
                ctx.reply('Дякую за твої пропозиції, вони дуже ціні для мене. Я тобі ще чимось можу допомогти', main_menu);
            } catch (err){
                ctx.reply('Вибач, але щось пішло не так, твій лист не був надісланий тому спроюуй щераз трохи пізніше.', main_menu);
            }
        });
        return ctx.scene.leave(); // Переходим к следующему обработчику.
    }
);
module.exports = {mail_improvement};