// Підключення модулів
let {bot, users} = require('./module_requirer');
let { help, start, new_message, check, hi,  send_message_to_chat} = require ('./functions');


// реєструємо сценарії
require('./scene/register_scene.js')();

 // включаємо Сторинку админа
 require('./admin_space/admin_space.js')();


 // загружаємо головне меню
require('./menu/main_menu.js')();
//загружаємо особистий кабінет
require('./menu/Personal_Area.js')();
//загружаємо мені зворотнього звязку
require('./menu/feedback_menu.js')();
//загружаємо меню Функции
require('./menu/function_menu.js')();



// меню показники

// реакція на кнопуку "допоможи"
bot.action('help', (ctx) =>  check (ctx,help));
// реакція на кнопуку "старт
bot.action('start', (ctx) =>   check (ctx,start));
// реакція на реєстрація із зміною імені
bot.action("cal_rename", (ctx) => ctx.scene.enter("cal_rename"));
// реакція на реєстрація із іменем з Телеграма
bot.action("cal_this_name", (ctx) => ctx.scene.enter("cal_this_name"));
// реакція на кнопуку "привіт"
bot.action('hi', (ctx) =>   check (ctx,hi));
// реакція на введений текст "HI','Hi','hi','Привет','Привіт','привет','привіт"
bot.hears(['HI','Hi','hi','Привет','Привіт','привет','привіт'], (ctx) =>{
    if(users[ctx.from.id] != null){
        if (users[ctx.from.id].chat == 'on') {
            check(ctx, send_message_to_chat);
        } else {hi(ctx);}
    }else {
        check(ctx, hi)
    }
});
// реареакція на введений текст ['help','Help','HELP']
bot.hears(['help','Help','HELP','Допомога'], (ctx) => {
    if(users[ctx.from.id] != null){
        if (users[ctx.from.id].chat == 'on') {
            check(ctx, send_message_to_chat);
        } else {help(ctx);}
    }else {
        check(ctx, help);
    }
});
// реареакція на введений текст 'Від нині називай мене'
bot.hears('Від нині називай мене', (ctx) => {
    if(users[ctx.from.id] != null){
        if (users[ctx.from.id].chat == 'on') {
            check(ctx, send_message_to_chat);
        } else {() => ctx.scene.enter("change_name");}
    }else {
        check(ctx, () => ctx.scene.enter("change_name"));
    }
});
// реакція на команди формату /"команда"
bot.command('start', (ctx) => {
    check (ctx,start);
});
bot.command('help', (ctx) => {
    check (ctx,help);
});
bot.command('name', (ctx) => {
    check(ctx, ()=> ctx.scene.enter("change_name"));
});
bot.action('name', (ctx) => {
    check(ctx, ()=> ctx.scene.enter("change_name"));
});

bot.command('stop', (ctx) => {
    check(ctx, ()=> users[ctx.from.id].del());
});

bot.on('message', function (ctx) {
    if(users[ctx.from.id] != null){
    if (users[ctx.from.id].chat == 'on') {
        check(ctx, send_message_to_chat);
    } else {new_message(ctx);}
    }else {
        check(ctx, new_message);
    }

});
bot.startPolling();
bot.launch();