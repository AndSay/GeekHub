'use strict';


let range = {
    from: 1,
    to: 100
};
range[Symbol.iterator] = function() {
    let min = this.from;
    let max = this.to;
    return {
        next() {
            return {
                done: false,
                value: Math.floor(Math.random()*max+min)
            }
        }
    }
};
let randominazer = range[Symbol.iterator]();


document.addEventListener('DOMContentLoaded',function () {
    document.getElementById('rand').addEventListener('click',function(){
        document.getElementById('random_number').innerText =  randominazer.next().value;
    })
});


