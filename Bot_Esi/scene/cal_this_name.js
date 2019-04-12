// сценарій - регістрація з імям акаунта Телеграм
let {WizardScene, Markup, users} = require('../module_requirer');
let {reg} = require ('../functions');
let {get_number} = require('../menu_butons');


let cal_this_name = new WizardScene(
    "cal_this_name", //
    (ctx) => {
        ctx.deleteMessage();
        ctx.reply('Вкажи свій контактний номер телефону', get_number);
        return ctx.wizard.next();//ctx.wizard.next(); // Переходим к следующему обработчику.
    },
    (ctx) => {
        console.log(typeof ctx.message.contact);
        if (ctx.message.contact != undefined){
            console.log(ctx.message.contact);
            if (ctx.message.contact.user_id != ctx.from.id) {
                //ctx.reply('Вибач, але це не ти. Будь ласка нажми кнопочку знизу, це потрібно для ТВОЄЇ авторизації.');
                console.log('Cheater');
                return ctx.reply('Кого ти хочеш обдурити? Думаєш я не знаю що це не ти? Будь ласка нажми кнопочку знизу, це потрібно для ТВОЄЇ авторизації.',get_number);
            }
        } else {

            console.log('true undefined');
            return ctx.reply('Будь ласка нажми кнопочку знизу, це потрібно для твоєї авторизації',get_number);
        }

        users [ctx.from.id]={};
        users[ctx.from.id].name = ctx.from.first_name;
        users[ctx.from.id].telegram_id=ctx.from.id;
        users[ctx.from.id].telephone = ctx.message.contact.phone_number;
        reg (ctx);

        ctx.reply('Приємно познайомитись '+ users[ctx.from.id].name,Markup.keyboard([
            'Фунції','Допомога','Особистий кабінет','Зворотній звязок'])
            .oneTime()
            .resize()
            .extra());
        return ctx.scene.leave(); // Переходим к следующему обработчику.
    }
);

module.exports = {cal_this_name};
