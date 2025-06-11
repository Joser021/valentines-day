const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const watch = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minute = dateToday.getMinutes();
    let second = dateToday.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;
})