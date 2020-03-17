const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=3d6a1aee115e55a320ca45412bdf9764";
fetch(forecastapiURL)
  .then((response) => response.json())
  .then((forecastdata) => {
    console.log(forecastdata);

    document.getElementById('currently').textContent = Math.round(jsObject.main.temp);
    document.getElementById('max').textContent =Math.round(jsObject.main.temp_max);
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed);
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
 currentTemp.textContent =jsObject.main.temp;
});

