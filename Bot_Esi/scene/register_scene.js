// реєстрація сценаріїв
module.exports = ()=>
{
    let {session, Stage, bot, } = require('../module_requirer');
    let {send_Message} = require('../admin_space/scene_wrait_meseg_to.js');
    let {send_Message_to_all} = require('../admin_space/scene_wrait_meseg_to_all.js');
    let {cal_rename} = require('./cal_rename');
    let {cal_this_name} = require('./cal_this_name');
    let {change_name} = require('./change_name');
    let {mail_improvement} = require('./mail_improvement');
    let {mail_team} = require('./mail_team');


    let stage = new Stage();
    stage.register(send_Message_to_all);
    stage.register(send_Message);
    stage.register(cal_rename);
    stage.register(cal_this_name);
    stage.register(change_name);
    stage.register(mail_improvement);
    stage.register(mail_team);
    bot.use(session());
    bot.use(stage.middleware());
}