

        //загрузка з памяти
        import locLoading_PenguinView from "../PenguinView";
        import locLoading_empty from "./locLoading_empty";
        import todolist from "../todolist";

        function locLoading (ind){

            if (localStorage.getItem("checkbox"+ind)!='') {
                let tdList = {};
                todolist["TDL"+ind]=tdList;
                tdList.text = localStorage.getItem("text" + ind);
                tdList.time = localStorage.getItem("time" + ind);
                tdList.pos= localStorage.getItem("pos" + ind);;
                tdList.ind = ind;
                locLoading_PenguinView (ind,tdList)
            }else{
                let ret=locLoading_empty(ind);
                if(ret==true){
                    locLoading (ind);
                } else if (ret==false){
                    return false;
                }
            }

        }


export default  locLoading;














