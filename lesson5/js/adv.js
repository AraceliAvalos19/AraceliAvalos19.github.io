var day = new Date();
var d = day.getDay();    

if (d != 5) {
    document.getElementById("adv").style.display = 'none';
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("hide");
}
