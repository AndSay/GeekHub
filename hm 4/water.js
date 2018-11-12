//let j=10;
var array=[0,10,10,0,5,7,2,0];
//for (let i=0;i<+j+1;i++) {                            ///Ð³ÐµÐ½ÐµÑ€Ð°Ñ†Ð¸Ñ Ñ€Ð°Ð½Ð´Ð¾Ð¼Ð½Ð¾Ð³Ð¾ Ð¼Ð°ÑÐ¸Ð²Ð° Ñ‡Ð¸ÑÐµÐ»
//    array[i]=Math.round(Math.random()*100);
//}
console.log(array);
var iw=0;                                               /// ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð²Ð¾Ð´Ð¸
array.forEach(water);                                   ///Ð·Ð°Ð¿ÑƒÑ Ð¿Ð¾Ð´ÑÑ‡ÐµÑ‚Ð°
if(array.length<3) {
	array.forEach(water);  
}
function water(x,i,arr) {
//    debugger
    if(arr.length<3) {
       return iw;
    } 
	
    let sarr=arr.slice();
    sarr.sort(function(a, b) {
		return b - a;
	});
    let ind=0;                                          //Ð¸Ð½Ð´Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€ ÑÐ¾ÑÑ‚Ð¾ÑÐ½Ð¸Ñ, Ð¿Ñ€Ð¸ 1 Ð½Ð°Ñ‡Ð¸Ð½Ð°ÐµÑ‚ÑÑ Ð¿Ð¾Ð´ÑÑ‡ÐµÑ‚, Ð¿Ñ€Ð¸ 2 Ð·Ð°ÐºÐ°Ð½Ñ‡Ð¸Ð²Ð°ÐµÑ‚ÑÑ

    let j;

    for (j=0;j<sarr.length||ind!=2;j++){
//debugger
        if(arr[j]==sarr[0]||arr[j]==sarr[1]){       //Ð¾Ð¿Ñ€Ð¸Ð´Ð¸Ð»ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¸ Ð¿ÐµÑ€Ð²Ð¾Ð¹ ÑÐ°Ð¼Ð¾Ð¹Ð²Ð¸ÑÐ¾ÐºÐ¾Ð¹ Ñ‚Ð¾Ñ‡ÐºÐ¸ Ð½Ð° ÑÑ‚Ð¾Ñ‚ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚

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
                iw += sarr[1] - arr[j];                           //Ð¿Ð¾Ð´ÑÑ‡Ñ‘Ñ‚ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð² Ð²Ð¾Ð´Ð¸
            }
            arr.splice(j,1);                                                //ÑƒÐ´Ð°Ð»ÐµÐ½Ð¸Ðµ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ñ Ð¼Ð°ÑÐ¸Ð²Ð°
            j-=1;
        }
    }
}
console.log(iw);
