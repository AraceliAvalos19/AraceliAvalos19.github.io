const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

  const ejemplo = jsonObject['ejemplo'];

  for (let i = 0; i < ejemplo.length; i++ ) {

    //createElement
    let town = document.createElement('section');
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let year = document.createElement("h4");
    let population = document.createElement("h4");
    let rainfall = document.createElement('h4');
    let image = document.createElement('img');

    //variables
    h2.textContent = ejemplo[i].towname;
    h3.textContent = ejemplo[i].motto;
    year.textContent = "Year Founded" + ejemplo[i].yearFounded;
    population.textContent = "Population" + ejemplo[i].currentPopulation;
    rainfall.textContent = "Anual Rain Fall" + ejemplo[i].averageRainfall;

    //images
    image.setAttribute('src', "images/" + ejemplo[i].photo);
    image.setAttribute('alt', "picture of:" + h2.textContent);
       
    //append
    town.appendChild(h2);
    town.appendChild(h3);
    town.appendChild(year);
    town.appendChild(population);
    town.appendChild(rainfall);
    town.appendChild(image);

    document.querySelector('div.towns').appendChild(town);
  }});