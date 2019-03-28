
//изминение елемента
function Edite_Button(EventTarget){
    let i=EventTarget.id;
    i=+i.slice(4);
    console.log(i);
    console.log(EventTarget);

    localStorage.setItem("time"+i,'');
    localStorage.setItem("text"+i,'');
    localStorage.setItem("checkbox"+i,'');

    console.log(EventTarget.parentElement.childNodes[1]);
    console.log(EventTarget.parentElement.childNodes[0]);
    document.getElementById('textIN').value=EventTarget.parentElement.childNodes[1].innerHTML;
    EventTarget.parentElement.remove();
}
export default Edite_Button;