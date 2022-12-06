const months =[
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

const weekdays=[
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];

const calendario = document.querySelector('.calendario');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date (tempYear,tempMonth,tempDay + 17,19,0,0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]
const weekday= weekdays[futureDate.getDay()];
const date = futureDate.getDate();

calendario.textContent = `El tiempo termina  ${weekday},${date} ${month} ${year} ${hours}: ${minutes}`

const futureTime = futureDate.getTime();
function getRemaindingTime()
const today = new Date().getTime();

const t = futureTime - today;
//1 = 1000 ms
//1 minut = 60s
//1hr = 60m
//1 = 24 hr
// en milisegundos

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = t /oneDay;
days = Math.floor(days);
let hour = Math.floor((t % oneDay)/oneHour);
let minute = Math.floor((t % oneHour)/oneMinute);
let seconds = Math.floor((t % oneMinute)/1000);


const value = [days,hour,minutes,seconds]

function format (item){
    

}

