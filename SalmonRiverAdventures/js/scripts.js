WebFont.load({
    google: {
    families: ["Montserrat","Oswald", "Roboto Slab"
    }
    });


function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");

}

function adjustSeverity(severity) {
    document.getElementById("severity").innerHTML = severity;
  }
  