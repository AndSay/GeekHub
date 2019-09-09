// меню зворотнього звязку

module.exports = ()=> {
    let { bot} = require('../module_requirer');
    let { check,  call_me, visit_me} = require('../functions');
    let { feedback_menu, feedback_menu_call_agree, feedback_menu_visit_agree, type_email_support, email_support_team, email_support_for_improvement} = require('../menu_butons');

// Запит на візит
    bot.action('call_controller', (ctx) => ctx.editMessageText('Запросити на прогулянку?', feedback_menu_visit_agree));
// Так зателефонуй мені
    bot.action('feedback_menu_agree_visit_yes', (ctx) => {
        check(ctx, visit_me)
    });


// Запит на телефонний виклик
    bot.action('invite_a_call', (ctx) => ctx.editMessageText('Попросити передзвонити?', feedback_menu_call_agree));
// Так зателефонуй мені
    bot.action('feedback_menu_agree_call_yes', (ctx) => {
        check(ctx, call_me)
    });
// Ні не потрібно телефонувати
    bot.action('feedback_menu_agree_no', (ctx) => ctx.editMessageText('Можливо я можу ще щось зробити для тебе? ', feedback_menu));


// Написати листа
    bot.action('email_support', (ctx) => { ctx.deleteMessage();
        ctx.reply('Що саме ти хочеш написати ', type_email_support)});
//написати листа в команду підтримки
    bot.action('Letter_to_the_support_team', (ctx) => { ctx.deleteMessage();
        ctx.reply('Ти хочеш написати листа у групу підтримки, серйозно?', email_support_team)});
// написати листа пропозицію
    bot.action('Suggestion_for_improvement', (ctx) =>  {ctx.deleteMessage();
    ctx.reply('Ти хочеш написати листа з пропозиціями?', email_support_for_improvement)});

// написати листа
    bot.action('email_support_for_improvement_yes', (ctx) => {
        check(ctx, (ctx) => ctx.scene.enter("mail_improvement"))
    });
    bot.action('email_support_team_yes', (ctx) => {
        check(ctx, (ctx) => ctx.scene.enter("mail_team"))
    });
}
