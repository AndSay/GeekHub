document.addEventListener('DOMContentLoaded', function documentReady() {
    var base = {
        Name: Name,     ///имя
        hp: 100,        ///жизнь
        starve: 100,    ///голод
        mood: 100,      ///щастя
        aggression: 0,    // /агресія
        energy: 100,       ///усталість
        ThisHTML: "Імя "+this.Name+" Життя "+this.hp+ " Голод " +this.starve+" Щастя "+this.mood+" Агресия "+this.aggression+" Енергия "+this.energy,
        idi: "creature",
        GetHTML: function () {
            this.ThisHTML= "Імя "+this.Name+" Життя "+this.hp+ " Голод " +this.starve+" Щастя "+this.mood+" Агресия "+this.aggression+" Енергия "+this.energy;
        },
        treatment: function () {         ///лікування
            if (this.hp <= 85) {
                this.hp = this.hp + 15;
            } else {
                this.hp = 100;
            }
            if (this.starve > 5) {
                this.starve = this.starve - 5;
            } else {
                this.starve = 0;
            }
            if (this.mood > 10) {
                this.mood = this.mood - 10;
            } else {
                this.mood = 0;
            }
            if (this.aggression > 5) {
                this.aggression = this.aggression - 5;
            } else {
                this.aggression = 0;
            }
            if (this.energy > 10) {
                this.energy = this.energy - 10;
            } else {
                this.energy = 0;
            }
            this.update();
            console.log(this);
        },
        sleep: function () {         ///спать
            if (this.hp <= 95) {
                this.hp = this.hp + 5;
            } else {
                this.hp = 100;
            }
            if (this.starve > 2) {
                this.starve = this.starve - 2;
            } else {
                this.starve = 0;
            }
            if (this.mood < 95) {
                this.mood = this.mood + 5;
            } else {
                this.mood = 100;
            }
            if (this.aggression > 5) {
                this.aggression = this.aggression - 5;
            } else {
                this.aggression = 0;
            }
            if (this.energy < 85) {
                this.energy = this.energy + 15;
            } else {
                this.energy = 100;
            }
            this.update();
            console.log(this);
        },
        play: function () {         ///play
            if (this.starve > 10) {
                this.starve = this.starve - 10;
            } else {
                this.starve = 0;
            }
            if (this.mood < 85) {
                this.mood = this.mood + 15;
            } else {
                this.mood = 100;
            }
            if (this.aggression < 97) {
                this.aggression = this.aggression + 3;
            } else {
                this.aggression = 100;
            }
            if (this.energy > 10) {
                this.energy = this.energy - 10;
            } else {
                this.energy = 0;
            }
            this.update();
            console.log(this);
        },
        feed: function () {         ///feed
            if (this.hp <= 95) {
                this.hp = this.hp + 5;
            } else {
                this.hp = 105;
            }
            if (this.starve < 85) {
                this.starve = this.starve + 15;
            } else {
                this.starve = 105;
            }
            if (this.mood < 95) {
                this.mood = this.mood + 5;
            } else {
                this.mood = 100;
            }
            if (this.aggression > 5) {
                this.aggression = this.aggression - 5;
            } else {
                this.aggression = 0;
            }
            if (this.energy < 95) {
                this.energy = this.energy + 5;
            } else {
                this.energy = 100;
            }
            this.update();
            console.log(this);
        },
        cheat: function () {         ///cheat
            this.hp = 100;
            this.starve = 100;
            this.mood = 100;
            this.aggression = 0;
            this.energy = 100;
            this.update();
            console.log(this);
        },
        update:function () {
           // console.log(document.getElementById(this.idi+"param").innerHTML);
            this.GetHTML();
            document.getElementById(this.idi+"param").innerHTML=this.ThisHTML;
            //console.log(this.ThisHTML);
        },
        step: function(){
            if (this.hp!="HE IS DIE") {
                if (this.energy==0||this.starve == 0||this.aggression > 75) {
                    if (this.hp > 10) {
                        this.hp = this.hp - 10;
                    } else {
                        this.hp = "HE IS DIE";
                    }
                }
                
                if (this.starve>=5) {
                    this.starve = this.starve - 5;
                }else{
                    this.starve =0;
                }

                if (this.mood>=5) {
                    this.mood = this.mood - 5;
                }else{
                    this.mood =0;
                }

                if (this.aggression <= 95) {
                    this.aggression = this.aggression + 5;
                } else {
                    this.aggression = 100;
                }

                if (this.energy>=5) {
                    this.energy = this.energy - 5;
                }else{
                    this.energy =0;
                }
                this.update();
            }
        },

        create:function () {
            let text = document.getElementById('Name').value;
            if (text != '') {
                document.getElementById('Name').value='';
                let timer = setInterval(() => this.step(), 3000);
                let tab = document.createElement('li');
                let butt = document.createElement('div');

                let feed = document.createElement('button');
                let play = document.createElement('button');
                let sleep = document.createElement('button');
                let treatment = document.createElement('button');
                let die = document.createElement('button');
                let cheat = document.createElement('button');

//              let creature =document.createElement('object');
//              creature =Object.create(base);

                let param = document.createElement('span');

                let idind = "creature" + minions.children.length;
                tab.id = idind;
                this.idi=idind;
                //             creature.id=idind+"body";
                this.Name = text;
                feed.innerHTML = "Кормить";
                play.innerHTML = "Играть";
                sleep.innerHTML = "Спать";
                treatment.innerHTML = "Лечить";
                die.innerHTML = "Похоронить";
                cheat.innerHTML = "Чит";

                feed.class = "feedB";
                play.class = "playB";
                sleep.class = "sleepB";
                treatment.class = "treatmentB";
                die.class = "dieB";
                cheat.class = "cheatB";

                feed.id = idind + "feed";
                play.id = idind + "play";
                sleep.id = idind + "sleep";
                treatment.id = idind + "treatment";
                die.id = idind + "die";
                cheat.id = idind + "cheat";
                this.GetHTML();
                //             creature.innerHTML=creature.ThisHTML;
                param.innerHTML = this.ThisHTML;
                param.id=idind+"param";
                minions.appendChild(tab);
                tab.appendChild(butt);
                butt.appendChild(feed);
                butt.appendChild(play);
                butt.appendChild(sleep);
                butt.appendChild(treatment);
                butt.appendChild(die);
                butt.appendChild(cheat);
                tab.appendChild(param);

                document.getElementById(this.idi).addEventListener('click', ()=> {
                    console.log(event.target.class );
                    if (event.target.innerHTML == "Кормить"){
                        this.feed();
                        console.log(event.target.innerHTML);
                    }else if (event.target.innerHTML == "Играть"){
                        this.play();
                        console.log(event.target.innerHTML);
                    }else if (event.target.innerHTML == "Спать"){
                        this.sleep();
                        console.log(event.target.innerHTML);
                    }else if (event.target.innerHTML == "Лечить"){
                        this.treatment();
                        console.log(event.target.innerHTML);
                    }else if (event.target.innerHTML == "Похоронить"){
                        clearTimeout(timer);
                        console.log(event.target.innerHTML);
                        event.target.parentElement.parentElement.remove();
                    }else if (event.target.innerHTML == "Чит"){
                        this.cheat();
                        console.log(event.target.innerHTML);

                    }
                });
                //document.getElementById('Name').value = '';
                //console.log("Name "+ text );
//              feed.addEventListener('click', idint(feed.id));
//              play.addEventListener('click', idint(play.id));
//              sleep.addEventListener('click', idint(sleep.id));
//              treatment.addEventListener('click', idint(treatment.id ));
                //            return creature;
            };
        }

    };
    var j=0;
    addbutt.addEventListener('click',
        function addlist() {
        let text = document.getElementById('Name').value;
        if (text != '') {

            let creature =Object.create(base);
            creature.create();
            // [creature.id].addEventListener('click',function () {
            //     console.log(event.target.class );
            //     if (event.target.innerHTML == "Кормить"){
            //         creature.feed();
            //         console.log(event.target.innerHTML);
            //     }else if (event.target.innerHTML == "Играть"){
            //         creature.play();
            //         console.log(event.target.innerHTML);
            //     }else if (event.target.innerHTML == "Спать"){
            //         creature.sleep();
            //         console.log(event.target.innerHTML);
            //     }else if (event.target.innerHTML == "Лечить"){
            //         creature.treatment();
            //         console.log(event.target.innerHTML);
            //     }else if (event.target.innerHTML == "Похоронить"){
            //         console.log(event.target.innerHTML);
            //         event.target.parentElement.parentElement.remove();
            //     }else if (event.target.innerHTML == "Чит"){
            //         creature.cheat();
            //         console.log(event.target.innerHTML);
            //
            //     }
            // });
/*
            let param = document.createElement('span');

            let idind="creature"+minions.children.length;
            tab.id=idind;
            creature.id=idind+"body";
            creature.Name=text;
            feed.innerHTML = "Кормить";
            play.innerHTML = "Играть";
            sleep.innerHTML = "Спать";
            treatment.innerHTML = "Лечить";
            die.innerHTML = "Похоронить";
            cheat.innerHTML = "Чит";

            feed.class = "feedB";
            play.class = "playB";
            sleep.class = "sleepB";
            treatment.class = "treatmentB";
            die.class = "dieB";
            cheat.class = "cheatB";

            feed.id = idind+"feed";
            play.id = idind+"play";
            sleep.id = idind+"sleep";
            treatment.id = idind+"treatment";
            die.id = idind+"die";
            cheat.id = idind+"cheat";
            creature.GetHTML();
            creature.innerHTML=creature.ThisHTML;
            param.innerHTML =creature.ThisHTML;
            minions.appendChild(tab);
            tab.appendChild(butt);
            butt.appendChild(feed);
            butt.appendChild(play);
            butt.appendChild(sleep);
            butt.appendChild(treatment);
            butt.appendChild(die);
            butt.appendChild(cheat);
            tab.appendChild(param);
            tab.appendChild(creature);
            document.getElementById('Name').value = '';
            console.log("Name "+ text );
//            feed.addEventListener('click', idint(feed.id));
//            play.addEventListener('click', idint(play.id));
//            sleep.addEventListener('click', idint(sleep.id));
//            treatment.addEventListener('click', idint(treatment.id ));
            return creature;*/
        }
    });
    // for (let i=0;i<minions.children.length;i++){
    //     ["creature"+i+"feed"].addEventListener('click', idint("creature"+i+"feed"));
    //     ["creature"+i+"play"].addEventListener('click', idint("creature"+i+"play"));
    //     ["creature"+i+"sleep"].addEventListener('click', idint("creature"+i+"sleep"));
    //     ["creature"+i+"treatment"].addEventListener('click', idint("creature"+i+"treatment"));
    // }
    // minions.addEventListener('click',function () {
    //     console.log(event.target.class );
    //     if (event.target.innerHTML == "Кормить"){
    //         console.log(event.target.innerHTML);
    //     }else if (event.target.innerHTML == "Играть"){
    //         console.log(event.target.innerHTML);
    //     }else if (event.target.innerHTML == "Спать"){
    //     console.log(event.target.innerHTML);
    //     }else if (event.target.innerHTML == "Лечить"){
    //         console.log(event.target.innerHTML);
    //     }else if (event.target.innerHTML == "Похоронить"){
    //         console.log(event.target.innerHTML);
    //         event.target.parentElement.parentElement.remove();
    //     }else if (event.target.innerHTML == "Чит"){
    //         console.log(event.target.innerHTML);
    //
    //     }
    // });
});