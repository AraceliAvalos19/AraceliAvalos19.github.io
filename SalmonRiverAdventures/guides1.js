const request = 'https://AraceliAvalos19.github.io/SalmonRiverAdventures/salmon.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (jsonObject) {
        console.table(jsonObject);
        const rivers = jsonObject['rivers'];

        for (let i=0; i < rivers.length; i++){
        
        if (rivers[i].name == "Jeff" || rivers[i].name == "Tani" ||
         rivers[i].name == "Sam" || rivers[i].name == "Nesti") {

            let river = document.createElement('section');
            let riverdiv = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let years = document.createElement('h4');
            let email = document.createElement('h4');
            let meet = document.createElement('h4');
            let image = document.createElement('img');


        
            h2.textContent = rivers[i].name;
            h3.textContent = rivers[i].certificate;
            years.textContent = 'Years or Experience: ' + towns[i].yearsExperience;
            email.textContent = 'Email' + rivers[i].emailAddress;
            meet.textContent = 'Meet Our Guide ' + towns[i].meetOurGuide;


            image.setAttribute('src', './images/' + towns[i].photo);
            image.setAttribute('alt', "picture of:" + h2.textContent);
        
            river.appendChild(h2);
            river.appendChild(h3);
            river.appendChild(years);
            river.appendChild(email);
            river.appendChild(meet);
            river.appendChild(towndiv);
            river.appendChild(image);

            document.querySelector('div.rivers').appendChild(town);
        }
        
        }
        
        
    });