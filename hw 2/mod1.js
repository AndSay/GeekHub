var j;
var met={};
 //pop - удаляет последний елемент масива
met.pop= function () {
        for (i = 0; typeof this[String(i)] != "undefined"; i++) {
            j = String(i);
        }
        delete this[j];
    }



 //push - добавляет последний елемент масива
met.push= function (el) {
 //   console.log(arguments.length);
 //   for (i = 0; i < arguments.length; i++) {
  //      this[String(this.length())] = arguments[i];
//        console.log(arguments[i]);
  //  }
    this[String(this.length())] = el;
}
//join обєднує в строку
met.join= function (and) {
    var b= String(this[String("0")]);
    for (i = 1; typeof this[String(i)] != "undefined"; i++) {
        if (typeof and!="undefined") {
            b = b + and + this[String(i)];
        }else {
            b = b + this[String(i)];
        }
    }
    return b;
}

// filter фильтруй
function fil(value){                                    // this is filter
    if (typeof value!="undefined"){
        if (value %2 == 0) {
            return value;
        }
    }
}

met.filter= function (func) {
    if (typeof func =="function") {
        var c = Object.create(met);
        var j = 0;
        for (i = 0; typeof this[String(i)] != "undefined"; i++) {
            if (typeof func(this[String(i)])!="undefined"){
                c[[String(j)]] = func(this[String(i)]);
                ++j;
            }
        }
        return c;
    } else {
        return "undefined";
    }
}


/// find
met.find= function (func) {
    if (typeof func =="function") {
        for (i = 0; typeof this[String(i)] != "undefined"; i++) {
            if (typeof func(this[String(i)])!="undefined"){
                return func(this[String(i)]);
            }
        }
    } else {
        return undefined;
    }
}




/// tostring
met.tost= function () {
        var b= "0: "+String(this[String("0")])+ "; ";
        for (i = 1; typeof this[String(i)] != "undefined"; i++) {
                b = b + i+": " + this[String(i)]+ "; ";
        }
        return b;
    }


/// map
met.map= function (func) {
    if (typeof func =="function") {
        var c = Object.create(met);
        c=this;
        for (i = 0; typeof this[String(i)] != "undefined"; i++) {
            c[[String(i)]] = func(this[String(i)]);
        }
        return c;
    } else {
        return "undefined";
    }
}




////sort
met.sort= function () {
    this.sort1(0);
}
met.sort1= function (k) {
    var a;
    var b;
    if (typeof String(this[String(j)])[k] != "undefined") {
        for (i = 0; typeof this[String(i)] != "undefined"; i++) {
            for (j = 0; typeof this[String(j)] != "undefined"; j++) {
                if (String(this[String(j)])[k] > String(this[String(j + 1)])[k]) {
                    a = this[String(j)];
                    b = this[String(j + 1)];
                    this[String(j + 1)] = a;
                    this[String(j)] = b;
                } else if (String(this[String(j)])[k] === String(this[String(j + 1)])[k]) {
                    met.sort1(k + 1);
                }
            }
        }
    }
}






/// length
met.length= function () {
    for (i = 1; typeof this[String(i)] != "undefined"; i++) {
    }
    return i;
}
met.test= function (a) {
return a();
}



/// ARRAY

j=Math.round(Math.random()*10);
var arr=Object.create(met);
// j=+prompt ("langth array","3");
var array=Object.create(met);
for (i=0;i<+j+1;i++) {
    array[String(i)]=Math.round(Math.random()*100);
}
console.log("start array = "+array.tost());
array.pop();
console.log("array after pop = "+array.tost());
array.push(7)
console.log("array after push = "+array.tost());
console.log("array after join = "+array.join(" something; "));

arr=array.filter(fil);
console.log("array after filter (%2==0) = "+arr.tost());
console.log("array after find (%2==0) = "+array.find(fil));
var formap=function(value){
    return (value+1)*value;
}
arr=array.map(formap)
console.log("array after map  = "+arr.tost());
array.sort();
console.log("array after sort = "+array.tost());
console.log("length of array after all = "+array.length());
