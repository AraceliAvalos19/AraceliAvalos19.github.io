http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID={3d6a1aee115e55a320ca45412bdf9764}
const apiURL = "...";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });