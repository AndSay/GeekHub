var array=[0,10,10,0,5,7,2,0];
  
///генерация рандомного масива чисел
let j=10;
for (let i=0;i<+j+1;i++) {                          
    array[i]=Math.round(Math.random()*15);
}
console.log(array);

 /// количество води
var iw=0;

///запус подсчета
while(array.length>2){                                           
	array.forEach(water); 
}                                  
console.log(iw);


function water(x,i,arr) {
 //  debugger
    let sarr=arr.slice();
    sarr.sort(function(a, b) {
		return b - a;
	});
    let ind=0;   //индификатор состояния, при 1 начинается подсчет, при 2 заканчивается

    let j;

    for (j=0;j<sarr.length-1&&ind!=2;j++){
//debugger
        if(arr[j]==sarr[0]||arr[j]==sarr[1]){       //опридиление позиции первой самойвисокой точки на этот момент

		   ind+=1;
			
        }
        if(ind==2){
            continue;
        }
        if(ind==1) {
            if (arr[j] != sarr[0] && arr[j] != sarr[1]) {
                iw += sarr[1] - arr[j];                           //подсчёт количеств води
            }
            arr.splice(j,1);   //удаление елементов  с масива где количество воды подсчитано
            j-=1;
        }
    }
}
