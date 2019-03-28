
        //использование пустых ячеекс памяти

        function locLoading_empty(ind){
            for(let i=ind+1;i<=+localStorage.getItem('len');i++){
                if (localStorage.getItem("checkbox"+i)!='') {

                    localStorage.setItem("checkbox"+ind,localStorage.getItem("checkbox"+i));
                    localStorage.setItem("checkbox"+i,'');
                    localStorage.setItem("text" + ind,localStorage.getItem("text" + i));
                    localStorage.setItem("text" + i,'');
                    localStorage.setItem("time" + ind,localStorage.getItem("time" + i));
                    localStorage.setItem("time" + i,'');
                    return true;
                }
            }
            return false;
        }
        export default locLoading_empty;









