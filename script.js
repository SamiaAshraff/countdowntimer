const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const newYears = '1 Jan 2022';

function countdown() {

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    console.log(newYearsDate - currentDate);

    const remaining = newYearsDate - currentDate;

    const sec = Math.floor(remaining / 1000);


    const days = Math.floor(sec / 3600 / 24);
    const hours = Math.floor(sec / 3600) % 24;
    const mins = Math.floor(sec / 60) % 60;
    const seconds = Math.floor(sec) % 60;

    console.log(days, hours, mins, seconds);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);

    function formatTime(time) {
        return time < 10 ? (`0${time}`) : time;
    }

}

countdown();

setInterval(countdown, 1000);