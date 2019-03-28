
//упорядкувати
function Sort_Button(){
    // console.log(todolist);
    let posit=[];
    let num=[];
    let size = 20;
    let j=localStorage.getItem('len')
    for (let i=1;i<=j;i++) {
        posit[i]=parseFloat (document.getElementById("li"+i).style.top);
        num[i]=i;
        console.log(posit[i]);
    }

    for (let i=1;i<=j;i++) {
        for (let ii=1;ii<j;ii++) {
            if (posit[ii]>posit[ii+1]){
                [posit[ii],posit[ii+1]]=[posit[ii+1],posit[ii]];
                [num[ii],num[ii+1]]=[num[ii+1],num[ii]];
            }
        }
    }
    console.log(posit);
    console.log(num);
    for (let i=1;i<=j;i++) {
        document.getElementById("li"+num[i]).style.top=size*i+'px';
        localStorage.setItem("pos"+num[i],size*i+'px');

    }
}

export default Sort_Button;