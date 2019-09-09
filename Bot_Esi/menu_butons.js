let {Markup} = require('./module_requirer');
// головне меню
let main_menu = Markup.inlineKeyboard([[
    // Markup.callbackButton('Показники','indicators_menu'),
    Markup.callbackButton('Фунції','function_menu'),
    Markup.callbackButton('Допомога','help')],[
    Markup.callbackButton('Особистий кабінет', 'Personal_Area'),
    Markup.callbackButton('Зворотній зв`язок', 'feedback_menu')
]])
    .resize()
    .extra();

// меню "фунции"
let function_menu = Markup.inlineKeyboard([
    [Markup.callbackButton('Надіслати приватне повідомлення','send_Message')],
    [Markup.callbackButton('Зайти у кімнату чату','enter_chat_room')],
    [Markup.callbackButton('Повернутись в головне меню', 'beck_in_first_menu')]
])
    .resize()
    .extra();

// меню зворотній звязок
let feedback_menu = Markup.inlineKeyboard([[
    Markup.callbackButton('Ходімо на прогулянку','call_controller'),
    Markup.callbackButton('Зателефонуй мені','invite_a_call')],
    [Markup.callbackButton('Написати в службу підтримки', 'email_support')],
    [Markup.callbackButton('Повернутись в головне меню', 'beck_in_first_menu')]
])
    .resize()
    .extra();

let feedback_menu_call_agree = Markup.inlineKeyboard([
    Markup.callbackButton('Так, я скучив','feedback_menu_agree_call_yes'),
    Markup.callbackButton('Ні, не потрібно','feedback_menu_agree_no')
])
    .resize()
    .extra();
let feedback_menu_visit_agree = Markup.inlineKeyboard([
    Markup.callbackButton('Так','feedback_menu_agree_visit_yes'),
    Markup.callbackButton('Ні','feedback_menu_agree_no')
])
    .resize()
    .extra();

let type_email_support = Markup.inlineKeyboard([[
    Markup.callbackButton('Лист до служби тех підтримки','Letter_to_the_support_team'),
    Markup.callbackButton('Пропозицію щодо покращення','Suggestion_for_improvement')],
    [Markup.callbackButton('Назад', 'feedback_menu')]
])
    .resize()
    .extra();
let email_support_team = Markup.inlineKeyboard([
    Markup.callbackButton('Так','email_support_team_yes'),
    Markup.callbackButton('Ні','feedback_menu_agree_no')
])
    .resize()
    .extra();
let email_support_for_improvement = Markup.inlineKeyboard([
    Markup.callbackButton('Так','email_support_for_improvement_yes'),
    Markup.callbackButton('Ні','feedback_menu_agree_no')
])
    .resize()
    .extra();
let Personal_Area = Markup.inlineKeyboard([[
    Markup.callbackButton('Зміна імені','name'),
    Markup.callbackButton('Керування сповіщеннями','reminder')],
    [Markup.callbackButton('Повернутись в головне меню', 'beck_in_first_menu')]

])
    .resize()
    .extra();
let reminder = Markup.inlineKeyboard([
    Markup.callbackButton('Увімкнути','reminder_on'),
    Markup.callbackButton('Вимкнути','reminder_off'),
    Markup.callbackButton('Назад','Personal_Area'),
])
    .resize()
    .extra();
let get_number = Markup
    .keyboard([{text:'Дати номер',  request_contact: true}])
    .oneTime()
    .resize()
    .extra();

let cancel_scene = Markup.inlineKeyboard([Markup.callbackButton('Я передумав', 'cancel_scene')
])
    .resize()
    .extra();
module.exports = {cancel_scene, function_menu, main_menu,  feedback_menu, feedback_menu_call_agree, feedback_menu_visit_agree, type_email_support, email_support_team, email_support_for_improvement, Personal_Area, reminder, get_number};