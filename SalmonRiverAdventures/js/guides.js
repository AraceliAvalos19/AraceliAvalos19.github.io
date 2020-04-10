const requestURL='https://AraceliAvalos19.github.io/SalmonRiverAdventures/salmon.json';


fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then (function (jsonObject) {
    console.log(jsonObject);
    const rivers = jsonObject['rivers'];
    const myrivers = ['Jeff', 'Tani', 'Sam', 'Nesti'];

    myrivers.forEach(mystring => {
        let riverObj = rivers.find(x => x.name === mystring)
        let card = document.createElement('section');
        let text = document.createElement('div');
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let years = document.createElement('p');
        let email = document.createElement('p');
        let meet = document.createElement('p');
        let img = document.createElement('img');
    
        h2.textContent = townObj.name;
        h4.innerHTML = '<i>' + townObj.motto + '<i>';
        years.textContent = 'Years of Experience: ' + townObj.yearsExperience;
        email.textContent = 'Email: ' + townObj.addressEmail;
        meet.textContent = 'Meet Our Guide: ' + townObj.meetGuide;
        img.setAttribute('src', './images/' + townObj.photo);
    
        text.appendChild(h2);
        text.appendChild(h4);
        text.appendChild(years);
        text.appendChild(email);
        text.appendChild(meet);
        card.appendChild(text);
        card.appendChild(img);
        document.querySelector('main.cards').appendChild(card);
    });
});