const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3d6a1aee115e55a320ca45412bdf9764";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp) + "°F";
    document.getElementById('high').textContent =Math.round(jsObject.main.temp_max) + "°F";
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity) + "%";
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed) + " mph";
    currentTemp.textContent =jsObject.main.temp;
});

