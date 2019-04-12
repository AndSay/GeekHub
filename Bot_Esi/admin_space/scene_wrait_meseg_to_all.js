let { WizardScene,  bot, users, DBclient} = require('../module_requirer');

let {cancel_scene} = require('../menu_butons');

let send_Message_to_all = new WizardScene(
    "send_Message_to_all", //
    (ctx) => {
        ctx.deleteMessage();
        ctx.reply('Введи текст повідомлення',cancel_scene);
        return ctx.wizard.next(); // Переходим к следующему обработчику.
    },
    (ctx) => {
        try {
            if (ctx.message.text != null) {
                    DBclient.query('SELECT * FROM users', function (err, result) {
                        if (err) throw err;
                        for (let i = 0;i<result.length;i++) {
                            if (result[i].telegram_id != ctx.from.id ) {
                                bot.telegram.sendMessage(result[i].telegram_id, ctx.message.text);
                            }
                        }
                        ctx.deleteMessage();
                        ctx.reply('Твоє повідомлення розіслано для ' +result.length + ' користувачів. ');
                    });

                return ctx.scene.leave();
            } else {
                users.egg.del();
                return ctx.scene.leave();
            }
        } catch (err) {
            return ctx.reply('Щось пішло не так, спробуй щераз. ');
            return ctx.scene.leave();
        }
    }
);
 module.exports = {send_Message_to_all};