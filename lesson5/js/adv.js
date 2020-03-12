var whatdate  = new Date();

if (whatdate.getDay() == Friday ) {
  document.querySelector("aside").style.display = "block";
} else {
  document.querySelector("aside").style.display = "none";
}
