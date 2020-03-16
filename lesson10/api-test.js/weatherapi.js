const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=3d6a1aee115e55a320ca45412bdf9764";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector('#current-temp');
    
    currentTemp.textContent = jsObject.main.temp;
    const imagesrc = "https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png"; //note the concatenation
    const desc = jsObject.weather[0].description;
    //note how we reference the weather array

    document.getElementById('imagesrc').textContent = imagesrc;
   
    //informational specificaton only
  
    document.getElementById('icon').setAttribute("src", imagesrc); 

    //focus on the setAttribute()method

    document.getElementById('icon').setAttribute("alt", desc); 
  
  });






 