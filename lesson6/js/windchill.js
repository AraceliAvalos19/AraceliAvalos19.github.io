const temperature = parseFloat(document.getElementById('temp').textContent);
const windSpeed = parseFloat(document.getElementById('windspeed').textContent);
const windChill = (35.74 + (0.6215 * temperature) - (35.75 *(Math.pow(windSpeed, 0.16))) + (0.4275 * temperature * (Math.pow(windSpeed, 0.16))));
document.getElementById('windChill').textContent = Math.ceil(windChill);

const temperature = parseFloat(document.getElementById('t').textContent);
const Wind = parseFloat(document.getElementById('s').textContent);

if(temperature<=50 && Wind >=3){
const windC  =(35.74 + (0.6215*temperature)-(35.75*Math.pow(Wind,0.16))+(0.4275*temperature*Math.pow(Wind,0.16))).toFixed(2);
document.getElementById('windC').textContent=windC;
}
else{
    const windC =('N/A');
    document.getElementById('windC').textContent=windC;
}