(function($) {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('search').addEventListener('click', submitData, true);

        function submitData(e) {
            let city = document.getElementById('name');
            let lat = document.getElementById('lat');
            let lon = document.getElementById('lon');

            let urll;
            let xhr = new XMLHttpRequest();
            if (city.value =="тут щось має бути") {
                city.value ='';
            }
            if (lat.value =="тут щось має бути") {
                lat.value ='';
            }
            if (lon.value =="тут щось має бути") {
                lon.value ='';
            }
            if (city.value != '') {
                urll='http://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=6f8eafbdaf6d164110162b340a071a93';
                success(urll);
            } else  if (lat.value != '' && lon.value != ''){
                urll='http://.openweathermap.org/data/2.5/weather?lat='+lat.value+'&lon='+lon.value+'&appid=6f8eafbdaf6d164110162b340a071a93';
                success(urll);
            } else {
                city.value="тут щось має бути";
                lat.value = "тут щось має бути";
                lon.value = "тут щось має бути";
                return;
            }
            function success(urll) {
                $.ajax({
                    url: urll,
                    method: 'GET',
                    dataType: 'JSONP',
                    success: function (data) {
                        console.log(data);
                        console.log(data.cod);
                        console.log(data.name);
                        console.log(data.coord.lat);
                        console.log(data.coord.lon);
                        console.log(data.weather);
                        console.log(data.main.temp);
                        console.log(data.main.humidity);
                        console.log(data.main.pressure);
                        let info='Город: '+data.name+' <br>Координаты: '+data.coord.lat+"  "+data.coord.lon+' <br> Температура: '+data.main.temp+ ' <br> Влажность: '+data.main.humidity+' <br> Давление: '+data.main.pressure;
                        let TextOut = document.createElement('label');
                        TextOut.innerHTML=info;
                        document.getElementById("info").appendChild(TextOut);
                        console.log(info);
                    }
                });
            }
            // function succes (XHR){
            //     console.log(XHR);
            //     console.log(XHR.cod);
            //     console.log(XHR.name);
            //      console.log(XHR.coord.lat);
            //      console.log(XHR.coord.lon);
                // console.log(XHR.status);

                // XHR.out=function (){
                //     console.log(this.status);
                // }
                // //console.log(XHR.status);
                // //XHR.id="xhr";
                // let TextIn = document.createElement('label');
                // info.appendChild(TextIn);

               // TextIn.innerHTML="Город: "+JSON.parse(XHR.responseText);
                //TextIn.innerHTML="Город: "+XHR.name+"Координаты: "+XHR.coords.lat+"  "+XHR.coords.lon+"Температура: "+XHR.main.temp+"Влажность: "+XHR.main.humidity+"Давление: "+XHR.main.pressure;
                //document.getElementById(info).innerHTML=XHR;
                //document.getElementById(info).innerText="Город: "+XHR.name+"Координаты: "+XHR.coords.lat+"  "+XHR.coords.lon+"Температура: "+XHR.main.temp+"Влажность: "+XHR.main.humidity+"Давление: "+XHR.main.pressure;

            // }
         }
    });
})(jQuery)
