//загрузка з памяти
import locLoading from './locLoading.js';


let exp = ()=> {
//          PenguinModel
console.log("1 ok")
//обявление памяти на сохранение или вызав загрущика из памяти
    if (localStorage.getItem('len') == null) {
        localStorage.setItem('len', '' + 0);
    } else {
        for (let i = 1; i <= +localStorage.getItem('len'); i++) {
            console.log(i);
            let ret = locLoading(i);
            if (ret == false) {
                localStorage.setItem('len', i - 1);
                break;
            }
        }
    }


    let ul = document.getElementById("list");
    ul.style.padding = '0px';
    ul.style.position = 'relative';



    console.log("1 finish ok")

};
export default exp;