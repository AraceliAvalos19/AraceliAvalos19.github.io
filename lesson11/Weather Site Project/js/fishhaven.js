var dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];

const currentapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=3d6a1aee115e55a320ca45412bdf9764";
const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=3d6a1aee115e55a320ca45412bdf9764";
getEvents("Fish Haven");

getWeatherData(currentapiURL, forecastapiURL);