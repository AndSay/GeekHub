var arr=["1","2","3","4","5"];
var a=["a","b","c"];
var b;
//arr[0] = prompt ("element 1",1);
//arr[1] = prompt ("element 2",2);
//arr[2] = prompt ("element 3",3);
//arr[3] = prompt ("element 4",4);
//arr[4] = prompt ("element 5",5);
//alert(arr);


arr.pop(); // удаляет последний елемент масива
//alert("New array after pop " +arr);
console.log("New array after pop "+ arr);


//arr.push(prompt( "New element 5",5),prompt( "New element 6",6));// добавляет последний елемент масива
arr.push(5,"6");
//alert("New array after push "+ arr);
console.log("New array after push"+ arr);


arr.shift();//  удаляет первый елемент масива
//alert("New array after shift "+ arr);
console.log("New array after shift "+ arr);


//arr.unshift(prompt( "New element 1",1));// добавляет первый елемент масива
arr.unshift("1");
//alert("New array after unshift "+ arr);
console.log("New array after unshift "+ arr);



a= arr.concat(a);    // обєднує масиви
//alert("New array after concat " + a);
console.log("New array after concat "+a);


b = arr.indexOf(prompt ("element 1",'1'));// find number of elements
if (b==-1){
    console.log("Try again");
//    alert("Try again");
} if(b!==-1) {
    console.log("number of this element is "+b);
//    alert("number of this element is "+b);
}


b = arr.join('+')                               // обєднує в строку
console.log("I just leave this her "+b);
//alert("I just leave this her: "+b);


function fE(x) {
    console.log("We got someone"+a +"with ForEach ");
//    alert("We got someone"+a +"with ForEach ");
}

arr.forEach(fE);   //call fE for all elements of array
console.log("We got something new with ForEach "+a);
//alert("We got something new with ForEach "+a);


function fm(x) {
    return x +2;
}
a=arr.map(fm);   // do some thing with all elements of array
console.log("We got more with map "+a);
//alert("We got more with map "+a);


function fil(value){// this is filter
    if (typeof value=="number"){
        if (isNaN(value)==false) {
            return value;
        }
    }
}
a=arr.filter(fil)                       // stay onli number
console.log("I think I lost something "+a);
//alert("I think I lost something "+a);


a=arr.slice(2,4);                   //i chose you stay elements 2 and 3
console.log("I chose you "+a);
//alert("I chose you "+a);


a=arr.splice(1,3,'I am 2 and I the number');     // delete 3 elements start from element"2" and then add new element
console.log("I HATE YOU!!! "+a);
//alert("I HATE YOU!!! "+a);
console.log("I like you, but here is someone extra "+arr);
//alert("I like you, but here is someone extra "+arr);


function extra(value){// this is filter
    if ( isNaN(+value)==true) {
        return value;
    }
}
var b=arr.find(extra)                       // stay onli first not number
console.log("WE FIND IT!!!! "+b);
//alert("WE FIND IT!!!! "+b);