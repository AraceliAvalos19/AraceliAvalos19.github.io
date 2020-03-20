//5585000
const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&units=imperial&APPID=3d6a1aee115e55a320ca45412bdf9764";
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((forecastdata) => {
    console.log(forecastData); 

    var g = 1;

    var today = new Date();
    var day = today.getDate();
    var daylist = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    console.log(day);

    for (i=1; i<6; i++) {
        var forecastDay = day +1;
        if (forecastDay >=7){
            forecastDay = forecastDay -7;
        }
        document.getElementById('day'+ 1).textContent = daylist [forecastDay];  
    }

    for (i=0; i<40; i++) {
        if (forecastData.list[i].dt_txt.indludes("18:00:00")) {
            var imagesrc='https://openweathermap.org/img/w/' + forecastData.list[i].weather[0].icon + '.png';
            var desc = forecastData.list[i].weather[0].description;

     document.getElementById('icon' + g).setAttribute('src',imagesrc);
     document.getElementById('icon' + g).setAttribute('alt',desc);
     document.getElementById('temp' + g).textContent= Math.round(forecastData.list[i].main.temp);

     g = g + 1}

        }

    });