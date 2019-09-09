// сценарій - зміни імені

let { WizardScene,  users} = require('../module_requirer');
let {rename} = require ('../functions');
let {main_menu} = require('../menu_butons');




let change_name = new WizardScene(
    "change_name", //
    (ctx) => {
        ctx.deleteMessage();
        ctx.reply('Як я можу тебе називати?');
        return ctx.wizard.next(); // Переходим к следующему обработчику.
    },
    (ctx) => {
        try {
            if (ctx.message.text != undefined) {
                users[ctx.from.id].name = ctx.message.text;
                rename(ctx);
                return ctx.scene.leave();
            } else {
                return ctx.reply('Введено некорекний формат імені. ' + users[ctx.from.id].name + ', спробуй щераз. ');
            }
        }catch (err) {
            return ctx.reply('Щось пішло не так, спробуй щераз пізніше. ',main_menu);
            return ctx.scene.leave();
        }
    }
);

module.exports = {change_name};