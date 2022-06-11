var countDownDate = new Date("july 18, 2022 00:00:00").getTime();
let x;

x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    let weeks = Math.floor(distance/ (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor(distance/ (1000*60*60*24));
    let hours = Math.floor(distance% (1000*60*60*24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance% (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance% (1000 * 60) / 1000);
 
    /* To add zero to the front of the number if its less than 10*/

    /*for weeks */
    if (weeks < 10) {
        weeks = `0${weeks}`
    }
     /*for days */
     if (days < 10) {
        days = `0${days}`
    }
     /*for weeks */
     if (hours < 10) {
        hours = `0${hours}`
    }
     /*for weeks */
     if (minutes < 10) {
        minutes = `0${minutes}`
    }
     /*for weeks */
     if (seconds < 10) {
        seconds = `0${seconds}`
    }

    document.getElementById("weeks").innerHTML = weeks;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("weeks").innerHTML = 00;
        document.getElementById("days").innerHTML = 00;
        document.getElementById("hours").innerHTML = 00;
        document.getElementById("minutes").innerHTML = 00;
        document.getElementById("seconds").innerHTML = 00;

    }

}, 1000);