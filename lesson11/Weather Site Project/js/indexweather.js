const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
 
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

  const towns = jsonObject['towns'];

  for (let i = 0; i < towns.length; i++ ) {

    if (towns[i].name == "Fish Haven" || towns[i].name =="Preston" || towns[i].name == "Soda Springs"){
    //createElement
    let town = document.createElement('section');
    let towndiv = document.createElement('div');
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let year = document.createElement("h4");
    let population = document.createElement("h4");
    let rainfall = document.createElement('h4');
    let image = document.createElement('img');

    
   
    //variables
    h2.textContent =towns[i].name;
    h3.textContent = towns[i].motto;
    year.textContent = "Year Founded: " + towns[i].yearFounded;
    population.textContent = "Population: " + towns[i].currentPopulation;
    rainfall.textContent = "Anual Rain Fall: " + towns[i].averageRainfall;

    //images
    image.setAttribute('src', "ejemplo.imagenes/" + towns[i].photo);
    image.setAttribute('alt', "picture of:" + h2.textContent);
       
    //append
    town.appendChild(h2);
    town.appendChild(h3);
    town.appendChild(year);
    town.appendChild(population);
    town.appendChild(rainfall);
    town.appendChild(towndiv);
    town.appendChild(image);

    document.querySelector('div.towns').appendChild(town);
   }
  }
});