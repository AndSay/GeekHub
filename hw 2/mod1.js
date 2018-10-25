var j;
j=+prompt ("how much drugs do you have?","3");
var name;
var drugs={};
for (i=1;i<j+1;i++) {
    name="Drugs"+i;
    drugs[name]=prompt("name of this shit: ", "Heroin");
}



 //pop - удаляет последний елемент масива
i=1;
name="Drugs"+i;
    for (i=1;typeof drugs["Drugs"+i] !="undefined";i++){
        j=i;
    }
    name="Drugs"+j;
    delete drugs[name];



 //push - добавляет последний елемент масива
i=1;
name="Drugs"+i;
for (i=1;typeof drugs["Drugs"+i] !="undefined";i++){
    j=i;
}
j=j+1;
name="Drugs"+j;
drugs[name]=prompt("name of this shit: ", "Heroin");


//join обєднує в строку
var a;
a=prompt("what to do with it all? : ", "Smoke");
var b= " ";
i=1;
name="Drugs"+i;
for (i=1;typeof drugs["Drugs"+i] !="undefined";i++){
    j=i;
    b=b+" "+a+" "+drugs["Drugs"+j];
}


// filter фильтруй
var c={};
for (i=1;typeof drugs["Drugs"+i] !="undefined";i++) {
    j = i;

    if (typeof drugs["Drugs" + j] != "number") {
        c["Drugs" + j] = drugs["Drugs" + j];
    }
}



/// find
a=prompt("what we are looking for: ", "Heroin");
b=undefined;
for (i=1;typeof drugs["Drugs"+i] !="undefined";i++) {
    j = i;

    if (typeof drugs["Drugs" + j] != "number") {
        if(typeof b=="undefined") {
            b = ["Drugs" + j] + ": " + drugs["Drugs" + j];
        }
    }
}


/// map
for (i=1;typeof drugs["Drugs"+i] !="undefined";i++){
    j=i;
    drugs["Drugs"+j]=prompt("new name of this shit: ", "Heroin");
}


/// toString





/// length
var len;
for (i=1;typeof drugs["Drugs"+i] !="undefined";i++) {
    j = i;
}
len=j;