'use strict';

/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [
    {
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];


function prettyYear(y) {
    //TODO
    if  (y<1000||y>9000) {
        return false;
    }
    var yy=[];
    yy[0]=+y;
    var i;
    var ii;
    var j=false;
    var ind=false;
    while(j==false){
        yy[0]=yy[0]+1;
        for(i=1;i<=4;i++) {
            yy[i] = String(yy[0])[i-1];
        }
        ind=false;
        for (i=1;ind==false&&i<4;i++){
            for (ii=i+1;ii<=4;ii++){
                if (yy[i]==yy[ii]){
                    ind=true;
                }
            }
        }
        if (ind==false){
            j=true;
            return yy[0];
        }
    }

}


tasks.push({
    title: "Красивый год",
    solution: prettyYear,
    tests: prettyYearTests
});
