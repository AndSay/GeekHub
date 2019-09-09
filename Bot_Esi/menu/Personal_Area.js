// особистий кабінет

module.exports = ()=> {
    let {bot} = require('../module_requirer');
    let { check, reminder_on_off} = require ('../functions');
    let {reminder} = require('../menu_butons');


    bot.action('reminder', (ctx) =>{ ctx.deleteMessage();
    ctx.reply('Це налаштування нагадувача', reminder)});
    bot.action('reminder_on', (ctx)=> check(ctx,()=>reminder_on_off(ctx,'on')));
    bot.action('reminder_off', (ctx)=> check(ctx,()=>reminder_on_off(ctx,'off')));
}