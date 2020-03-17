const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3d6a1aee115e55a320ca45412bdf9764";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currently').textContent = Math.round(jsObject.main.temp);
    document.getElementById('Wind Speed').textContent = Math.round(jsObject.main.wind.speed);
    document.getElementById('Humidity').textContent = Math.round(jsObject.main.humidity);
    document.getElementById('c).textContent = Math.round(jsObject.main.temp);


