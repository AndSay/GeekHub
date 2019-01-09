document.addEventListener('DOMContentLoaded', function () {

    var IMG=[];
    var imgL=[];
    addEventListener('scroll',load);


    for(let i=0;i<10;i++){
            let li = document.createElement('li');
            IMG[i] = document.createElement('img');
            IMG[i].id='img'+i;
            imgL[i]=false;
            document.getElementById('list').appendChild(li);
            li.appendChild(IMG[i]);

    }
    load();
    function load() {
        IMG.forEach(function (image, key) {
            if(imgL[key]==false) {
                setTimeout(function () {
                    getimg(key);
                }, 100 * key);
            }
        });
    }
    function getimg (i) {
        let pos =IMG[i].parentElement.getBoundingClientRect();
        let doc=document.documentElement.clientHeight;
        if (pos.y<doc){
            imgL[i]=true;
            console.log(i);
            console.log(doc);
            console.log(pos);
            IMG[i].src = 'img/'+i+'.png';

            return;
        }else {
            return;
        }
    }

});

