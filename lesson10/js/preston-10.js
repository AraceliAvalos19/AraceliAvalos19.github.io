const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3d6a1aee115e55a320ca45412bdf9764";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currently').textContent = Math.round(jsObject.main.temp);
    document.getElementById('max').textContent =Math.round(jsObject.main.temp_max);
    document.getElementById('windspeed').textContent = Math.round(jsObject.main.wind.speed);
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
    
 currentTemp.textContent =jsObject.main.temp;
});