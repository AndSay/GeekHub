'use strict';

/**
 * Double Cola
 *
 * Шелдон, Леонард, Пенни, Раджеш и Говард стоят в очереди к автомату по продаже баночек с напитком «Double Cola»,
 * других людей в очереди нет. Первый в очереди (Шелдон) покупает баночку, выпивает ее содержимое и раздваивается!
 * Получившиеся два Шелдона встают в конец очереди. Затем следующий в очереди (Леонард) покупает баночку,
 * выпивает и встает в конец очереди в двойном экземпляре, и так далее. Этот процесс продолжается до бесконечности.
 *
 * Например, третью баночку колы выпьет Пенни, и очередь будет выглядеть так:
 * Раджеш, Говард, Шелдон, Шелдон, Леонард, Леонард, Пенни, Пенни.
 *
 * Напишите программу, которая выведет имя человека, выпившего n-ую баночку.
 *
 * Обратите внимание, что в самом начале очередь выглядит так: Шелдон, Леонард, Пенни, Раджеш, Говард.
 * Первым человеком является Шелдон.
 *
 * Входные данные
 * Входные данные состоят из единственного целого числа n.
 *
 * Выходные данные
 * Выведите единственную строку — имя человека, который выпьет n-ую баночку колы. Баночки нумеруются от 1.
 * Обратите внимание, что следует выводить имена в следующем написании: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard".
 * Именно в этом порядке друзья стоят в очереди изначально.
 */

var doubleColaTests = [
    {
        parameters: [1],
        expectedResult: "Sheldon"
    },
    {
        parameters: [6],
        expectedResult: "Sheldon"
    },
    {
        parameters: [1802],
        expectedResult: "Penny"
    }
    // },
    // {
    //     parameters: [12345],
    //     expectedResult: "Leonard"
    // }
];


function doubleCola(n) {
  /*  //TODO
    var banka=[];
    var sb=0;
    var i=0;
    banka[0]=5;
    if(n>5) {
        i = 1
        sb=5;
        while (sb < n) {
            banka[i] = banka[i - 1] * 2;
            sb = sb + banka[i];
            i+=1;
        }
        sb = n - (sb - banka[i-1]);
    }
    var who=banka[i]/5
    if (n<=who){
        return "Sheldon";
    } else if (n<=who*2){
        return"Leonard";
    }else if (n<=who*3){
        return"Penny";
    }else if (n<=who*4){
        return"Rajesh";
    }else if (n<=who*5){
        return"Howard"
    }*/
    var arr=["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
    for (var i=0; arr.length<n;i++){
        arr[arr.length]=arr[i];
        arr[arr.length]=arr[i];
    }
    return arr[n-1];
}


tasks.push({
    title: "Double Cola",
    solution: doubleCola,
    tests: doubleColaTests
});
