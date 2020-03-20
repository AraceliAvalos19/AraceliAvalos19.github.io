var day = new Date().getDay();
if (day != 5) {
    document.getElementById("adv").style.display = "none";
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("hide");
}

