let j=10;
var array=[0,10,10,0,5,7,2,0];
for (let i=0;i<+j+1;i++) {                            ///генерация рандомного масива чисел
    array[i]=Math.round(Math.random()*15);
}
console.log(array);
var iw=0;   
while(array.length>3){                                            /// количество води
	array.forEach(water); 
}                                  ///запус подсчета
console.log(iw);


function water(x,i,arr) {
   // debugger
    if(arr.length<3) {
       return iw;
    }
    let sarr=arr.slice();
    sarr.sort(function(a, b) {
		return b - a;
	});
    let ind=0;                                          //индификатор состояния, при 1 начинается подсчет, при 2 заканчивается

    let j;

    for (j=0;j<sarr.length-1&&ind!=2;j++){
//debugger
        if(arr[j]==sarr[0]||arr[j]==sarr[1]){       //опридиление позиции первой самойвисокой точки на этот момент

		   ind+=1;
			
        }
 //        if (arr.indexOf(sarr[sarr.length-2])>arr.indexOf(sarr[sarr.length-1])){
  //           j=arr.indexOf(sarr[sarr.length-1]);
//        }else{
//             j=arr.indexOf(sarr[sarr.length-2]);
//         }
        if(ind==2||arr.length<3){
            continue;
        }
        if(ind==1) {
            if (arr[j] != sarr[0] && arr[j] != sarr[1]) {
                iw += sarr[1] - arr[j];                           //подсчёт количеств води
            }
            arr.splice(j,1);                                                //удаление елементов с масива
            j-=1;
        }
    }
}
