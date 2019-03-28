
        //смена сортировки
        function revers() {                                             //смена сортировки
            // console.log(todolist);
            let posit=[];
            let num=[];
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
                document.getElementById("li"+num[j-i+1]).style.top=posit[i]+'px';
                localStorage.setItem("pos"+num[j-i+1],posit[i]+'px');

            }
        }
        export default revers;

