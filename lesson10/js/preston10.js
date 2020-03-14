const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3d6a1aee115e55a320ca45412bdf9764";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
   const currentTemp = document.querySelector
   ("current-temp");
   const weatherIcon = document.querySelector
   ("#imagersrc");
   currentTemp.textContent = jsObject.main.temp;
  });
