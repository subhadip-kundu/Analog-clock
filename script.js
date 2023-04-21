const deg = 6;

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;

    //Code for every second move
    /*let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;*/

    //code for smooth move
    let ss = day.getSeconds() * deg + day.getMilliseconds() / 1000 * 360 / 60;

    if (ss === 0) {
        sc.style.transitionDuration = '0s'; // disable transition during reset
    } else if (ss === deg) {
        sc.style.transitionDuration = '0.1s'; // enable transition after reset
    }

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})


