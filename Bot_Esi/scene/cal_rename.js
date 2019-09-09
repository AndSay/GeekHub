// сценарій - регістрація з новим імям

let {WizardScene, Markup, users} = require('../module_requirer');
let {reg} = require ('../functions');
let {get_number} = require('../menu_butons');



let cal_rename = new WizardScene(
    "cal_rename", //
    (ctx) => {
        ctx.deleteMessage();
        ctx.reply('Як я можу тебе називати');
        return ctx.wizard.next(); // Переходим к следующему обработчику.
    },
    (ctx) => {
        try {
            if (ctx.message.text != undefined) {
                console.log(ctx.message.text);
                users [ctx.from.id] = {};
                users[ctx.from.id].name = ctx.message.text;
                ctx.reply('Вкажи свій контактний номер телефону', get_number);
                return ctx.wizard.next(); // Переходим к следующему обработчику.
            } else {
                return ctx.reply('Введено некорекний формат імені. ' + ctx.from.first_name + ', спробуй щераз. ');
            }
        } catch (err) {
            return ctx.reply('Введено некорекний формат імені. ' + ctx.from.first_name + ', спробуй щераз. ');
        }
    },
    (ctx) => {
        try {
            if (ctx.message.contact != undefined) {
                console.log(ctx.message.contact);
                if (ctx.message.contact.user_id != ctx.from.id) {
                    console.log('Cheater');
                    return ctx.reply('Кого ти хочеш обдурити? Думаєш я не знаю що це не ти? Будь ласка нажми кнопочку знизу, це потрібно для ТВОЄЇ авторизації.', get_number);
                }
            } else {
                console.log('true undefined');
                return ctx.reply('Будь ласка нажми кнопочку знизу, це потрібно для твоєї авторизації', get_number);
            }
            users[ctx.from.id].telegram_id = ctx.from.id;
            users[ctx.from.id].telephone = ctx.message.contact.phone_number;
            reg(ctx);
            ctx.reply('Приємно познайомитись ' + users[ctx.from.id].name, Markup.keyboard([
               'Фунції','Допомога','Особистий кабінет','Зворотній звязок'])
             .oneTime()
                .resize()
                .extra());
            return ctx.scene.leave();
        }catch(err){
            console.log(err);
            return ctx.reply('Будь ласка нажми кнопочку знизу, це потрібно для твоєї авторизації.');
        }
    }
);

module.exports = {cal_rename};