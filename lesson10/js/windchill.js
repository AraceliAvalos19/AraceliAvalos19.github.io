let t = jsObject.main.temp;
let s = jsObject.wind.speed;

if (t <= 50 && s > 3) {
  let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
  document.getElementById("windchill").textContent = chill.toFixed(0) + " ˚F"; 
} else {
  document.getElementById("windchill").textContent = "N/A"; 
}

