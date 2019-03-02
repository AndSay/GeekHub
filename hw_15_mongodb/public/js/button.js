// тут видалення елементів з бази даних і сторінок а также доавання даних з сторінки меню в сторінки сніданок обід вечерря

function Button(EventTarget) {
    let ET=EventTarget.target;
    // console.log(ET);
    // console.log(ET.innerText);
    // console.log(ET.parentElement.id);
    // console.log(ET.name);


    if (ET.name == "Del_menu") {
        let id ={id:ET.parentElement.id,type:"Del_menu"};
        ET.parentElement.remove();
        // console.log("start delete");
        add_in_menu(id,"del");
        document.getElementById("Sum_KCal").innerText= +document.getElementById("Sum_KCal").innerText - +ET.parentElement.children[1].innerHTML;
    }else if (ET.name == "Del_Dinner") {
        let id ={id:ET.parentElement.id,type:"Del_Dinner"};
        ET.parentElement.remove();
        // console.log("start delete");
        add_in_menu(id,"del");
        document.getElementById("Sum_KCal").innerText= +document.getElementById("Sum_KCal").innerText - +ET.parentElement.children[1].innerHTML;
    }else if (ET.name == "Del_Lunch") {
        let id ={id:ET.parentElement.id,type:"Del_Lunch"};
        ET.parentElement.remove();
        console.log("start delete");
        add_in_menu(id,"del");
        document.getElementById("Sum_KCal").innerText= +document.getElementById("Sum_KCal").innerText - +ET.parentElement.children[1].innerHTML;
    }else if (ET.name == "Del_bf") {
        let id ={id:ET.parentElement.id,type:"Del_bf"};
        ET.parentElement.remove();
        console.log("start delete");
        add_in_menu(id,"del");
        document.getElementById("Sum_KCal").innerText= +document.getElementById("Sum_KCal").innerText - +ET.parentElement.children[1].innerHTML;
    }else if(ET.name == "BF"){
        let id ={id:ET.parentElement.id,type:"bf"};
        console.log("start bf "+id);
        add_in_menu(id,"add");
        document.getElementById("Sum_KCal").innerText= +document.getElementById("Sum_KCal").innerText - +ET.parentElement.children[1].innerHTML;
    }else if(ET.name == "Lunch"){
        let id ={id:ET.parentElement.id,type:"lunch"};
        console.log("start lunch "+id);
        add_in_menu(id,"add");
        document.getElementById("Sum_KCal").innerText= +document.getElementById("Sum_KCal").innerText - +ET.parentElement.children[1].innerHTML;
    }else if(ET.name == "Dinner"){
        let id ={id:ET.parentElement.id,type:"dinner"};
        console.log("start diner "+id);
        add_in_menu(id,"add");
        document.getElementById("Sum_KCal").innerText= +document.getElementById("Sum_KCal").innerText - +ET.parentElement.children[1].innerHTML;
    }

}

function add_in_menu(dat,UL) {
    $.ajax({
        url: "/" + UL,
        data: dat,
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
            console.log('button error:' + error);
        }
    });
}