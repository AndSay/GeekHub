////тут калькулятор калорій

let calories={
    bf: 0,
    Lunch: 0,
    Dinner: 0
};
let limit=5000;


function CalCalk(type,cal) {

    calories[type] = +document.getElementById("Sum_KCal").innerText;
    // console.log(calories);
    if (calories[type] > limit) {
        if (type == "bf") {
            document.getElementById("BF_B").className = "btn btn-outline-dark";
        } else if (type == "Lunch") {
            document.getElementById("Lunch_B").className = "btn btn-outline-dark";
        } else if (type == "Dinner") {
            document.getElementById("Dinner_B").className = "btn btn-outline-dark";
        }
    } else if (calories[type] < limit) {
        if (type == "bf") {
            document.getElementById("BF_B").className = "btn btn-dark";
        } else if (type == "Lunch") {
            document.getElementById("Lunch_B").className = "btn btn-dark";
        } else if (type == "Dinner") {
            document.getElementById("Dinner_B").className = "btn btn-dark";
        }
    }
}

