const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()]
const monthName = months[todaysdate.getMonth()]
const currentdate = dayName + "," + todaysdate.getDay() + " " + monthName + " , " + todaysdate.getFullYear();

document.getElementById("lastmode").textContent = new Date()
<script src = "js / date.js"> </script>