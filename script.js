const monthNames = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();

document.addEventListener('DOMContentLoaded', () => {
renderCalendar();

document.getElementById('prev').addEventListener('click', () => {
currentDate.setMonth(currentDate.getMonth() - 1);
renderCalendar();
});

document.getElementById('next').addEventListener('click', () => {
currentDate.setMonth(currentDate.getMonth() + 1);
renderCalendar();
});
});

function renderCalendar() {
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

document.getElementById('monthYear').innerText = `${monthNames[month]} ${year}`;

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const calendarDays = document.getElementById('calendar-days');
calendarDays.innerHTML = '';

for (let i = 0; i < firstDay; i++) {
const emptyCell = document.createElement('div');
emptyCell.classList.add('empty');
calendarDays.appendChild(emptyCell);
}

for (let i = 1; i <= daysInMonth; i++) {
const dayCell = document.createElement('div');
dayCell.innerText = i;

if (i === new Date().getDate() && 
month === new Date().getMonth() && 
year === new Date().getFullYear()) {
dayCell.classList.add('today');
}

calendarDays.appendChild(dayCell);
}
}
