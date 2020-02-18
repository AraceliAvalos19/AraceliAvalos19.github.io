'use strict';

/**
 * Calculate the wind chill factor
 * @see https://www.weather.gov/media/epz/wxcalc/windChill.pdf
 *
 * @param  {Float} temperature - temperature in Fahrenheit
 * @param  {Float} windSpeed - wind speed in miles per hour
 * @return {Float}
 */
function calculateWindChillFactor(temperature, windSpeed) {
  return 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75)  *  windSpeed ^ 0.16;
}

const temp = 32,
 	 	  windSpeed = 5;

console.log(
	`The chill factor for temperature "${temp}" and wind speed "${windSpeed}" is "${calculateWindChillFactor(temp, windSpeed)}".`
);