// головне меню
module.exports = ()=> {
    let { check} = require ('../functions');
    let { bot,users} = require('../module_requirer');
     let {function_menu, main_menu, indicators_menu, feedback_menu,  Personal_Area} = require('../menu_butons');


    bot.action('indicators_menu', (ctx) => {
        ctx.editMessageText('Що саме ти хочеш зробити?', indicators_menu);
    });
 // реакція на кнопуку "Функции"
    bot.hears('Функції', (ctx) =>{check(ctx, ()=>{
        ctx.reply(users[ctx.from.id].name + ', що саме ти хочеш зробити?', function_menu)})});
    bot.action('function_menu', (ctx) =>{check(ctx, ()=>{ ctx.deleteMessage();
        ctx.reply(users[ctx.from.id].name + ', що саме ти хочеш зробити?', function_menu)})});
//меню Зворотній звяхок
    bot.hears('Зворотній зв`язок', (ctx) => {
        ctx.reply('Тут ти можеш попросити щоб з тобою зв`язялись', feedback_menu)});
    bot.action('feedback_menu', (ctx) => { ctx.deleteMessage();
        ctx.reply('Тут ти можеш попросити щоб з тобою зв`язялись', feedback_menu)});
// реакція на кнопуку "повернутись в головне меню"
    bot.action('beck_in_first_menu', (ctx) => { ctx.deleteMessage();
        ctx.reply('Чим ще я можу тобі допомогти?', main_menu)});
// реакція на кнопуку "Персоналький кабінет"
    bot.hears('Особистий кабінет', (ctx) => {
        ctx.reply('Це твій особистий кабінет.', Personal_Area)});
    bot.action('Personal_Area', (ctx) => { ctx.deleteMessage();
        ctx.reply('Це твій особистий кабінет.', Personal_Area)});
}