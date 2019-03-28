
//добавление елемента в память
import locLoading_PenguinView from "../PenguinView";

function addlist_PenguinView(text) {                            //добавление елемента в память
    let len;
    let size = 20;
    let tdList={}
    console.log('add test')
    len=+localStorage.getItem('len')+1;
    len+='';
    localStorage.setItem('len',len);
    let now = new Date();
    tdList.pos=len*size+'px';
    localStorage.setItem("pos"+len,len*size+'px');
    tdList.checkbox='false';
    localStorage.setItem("checkbox"+len,'false');
    tdList.text=text;
    localStorage.setItem("text"+len,text);
    tdList.time=':'+ ' '+  now.getDate()+'.'+now.getMonth()+'.'+now.getFullYear()+' '+' '+now.getHours()+':'+now.getMinutes();
    localStorage.setItem("time"+len,':'+ ' '+  now.getDate()+'.'+now.getMonth()+'.'+now.getFullYear()+' '+' '+now.getHours()+':'+now.getMinutes());

    document.getElementById('textIN').value='';
    locLoading_PenguinView(len,tdList);
}



export default addlist_PenguinView;