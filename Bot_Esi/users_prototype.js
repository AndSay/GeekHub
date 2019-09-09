
let Live_time = 120000;
let users = {};
users = require('./feddback_contacts');
users['proto'] = {};
users['proto'].del = function (){
    let {chat_room} = require ('./module_requirer');
    if (this.chat=='on'){
        for (let i=0; i<chat_room.length; i++){
            if (chat_room[i].id==this.id){
                chat_room.slice(i,1);
                break;
            }
        }
    }
    console.log('deleted start');
    delete users [this.telegram_id];
};
users['proto'].timerid = '';
users['proto'].timer = function() {
    clearTimeout(this.timerid);
    this.timerid = setTimeout(this.del, Live_time);
    // console.log('timer started');
};

module.exports = users;