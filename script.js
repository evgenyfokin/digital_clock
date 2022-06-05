'use strict';

window.onload = calculateTime;

function calculateTime() {
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    console.log(dayNumber);

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById('day').innerHTML = dayNames[dayNumber];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('ampm').innerHTML = ampm;

    setTimeout(calculateTime, 200);
}

let hours = document.getElementById('input1');
let minutes = document.getElementById('input2')

function countCucumbers () {
    document.getElementById('count').innerHTML = ((hours.value * 60 + +minutes.value)/20).toFixed(2);
}

calculateTime();


