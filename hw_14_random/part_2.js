
function perform() {
let argum = arguments;
let prom = new Promise ((resolve,reject)=>{
    resolve(argum[0]);
});
return prom;
}

perform(null, function(value) { // value === null
    var param = 1;
    console.log(param); // 1
    return param;
})
    .then(function(param) { // param === 1
        console.log(++param); // 2
        return param;
    })
    .then(function(param) { // param === 2
        console.log(++param); // 3
        return param;
    })
    .then(function(param) { // param === 3
        console.log(++param); // 4
        return param;
    })
    .then(function(param) { // param === 4
        console.log(++param); // 5
        return param;
    })
    .then(function(param) { // param === 5
        console.log(++param); // 6
        return param;
    });