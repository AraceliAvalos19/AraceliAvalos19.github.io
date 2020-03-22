WebFont.load({
    google: {
    families: ["Merriweather","Be Vietnam"]
    }
    });


function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");

}

function adjustSeverity(severity) {
    document.getElementById("severity").innerHTML = severity;
  }
  