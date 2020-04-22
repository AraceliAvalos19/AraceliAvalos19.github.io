const daynames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
];

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()]
const monthName = months[todaysdate.getMonth()]
const currentdate = dayName + "," + todaysdate.getDay() + " " + monthName + " , " + todaysdate.getFullYear();

document.getElementById("currentdate").textContent = new Date()
