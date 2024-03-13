let timer = document.getElementById("timer");

let start = document.getElementById("start");
let pause = document.getElementById("stop");
let reset = document.getElementById("reset");

let lap = document.getElementById("lap");
let lapContainer = document.getElementById("lap-items");
let clearLaps = document.getElementById("clear-laps");


let ms = 0, s = 0, m = 0, h = 0;

function setTime() {
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }

    if (s == 60) {
        s = 0;
        m++;
    }

    if (m == 60) {
        m = 0;
        h++;
    }

    let hours = h < 10 ? "0" + h : h;
    let minutes = m < 10 ? "0" + m : m;
    let seconds = s < 10 ? "0" + s : s;
    let milliseconds = ms < 10 ? "0" + ms : ms;


    timer.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`
}


let intervalID = null;
start.addEventListener("click", () => {
    intervalID = setInterval(setTime, 10);
});

pause.addEventListener("click", () => {
    if (intervalID != null) {
        clearInterval(intervalID);
    }
});

reset.addEventListener("click", () => {
    if (intervalID != null) {
        clearInterval(intervalID);
    }
    ms = 0; s = 0; m = 0; h = 0;
    timer.innerText = "00:00:00:00";
});


let lapCount = 0;
lap.addEventListener("click", () => {

    lapCount++;
    let hours = h < 10 ? "0" + h : h;
    let minutes = m < 10 ? "0" + m : m;
    let seconds = s < 10 ? "0" + s : s;
    let milliseconds = ms < 10 ? "0" + ms : ms;
    let newLap = document.createElement("p");
    newLap.classList.add("lap-item");
    newLap.innerText = `Lap ${lapCount}: ${hours}:${minutes}:${seconds}:${milliseconds}`
    lapContainer.appendChild(newLap);
});


clearLaps.addEventListener("click", () => {
    lapCount = 0;
    lapContainer.innerHTML = "";
})





