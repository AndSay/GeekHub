
// drug and drop

function dragdrop (obj, ind) {
    obj.onmouseup = function () {
        console.log('drag and drop stop');
        localStorage.setItem("sttop"+ind,obj.style.top);
        obj.style.zIndex = 900;
        localStorage.setItem("pos"+ind,obj.style.top);

        document.onmousemove = null;
        obj.onmouseup = null;
    }
    obj.onmousedown = function (e) { // 1. отследить нажатие
        function moveAt(e) {
            obj.style.top = e.pageY - obj.offsetHeight*4.5  + 'px';
        }
        console.log(event.target.type);
            obj.style.position = 'absolute';

            obj.style.zIndex = 1000;


            //перемещение по экрану
            console.log('start drop');
            document.onmousemove = function (e) {
                console.log('start drop 1');
                moveAt(e);
            };
    }

}

export default dragdrop;