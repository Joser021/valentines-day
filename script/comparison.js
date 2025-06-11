const calculateTime = setInterval(function time() {
    const time = document.querySelector(".time")
    let today = new Date();
    const firstDate = new Date("2024-12-10");
    let comparing = today - firstDate;

    let years = Math.floor(comparing / (1000 * 60 * 60 * 24 * 365.25));
    let months = Math.floor(comparing / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
    let days = Math.floor(comparing / (1000 * 60 * 60 * 24)) % 30;
    let hours = Math.floor(comparing / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(comparing / (1000 * 60)) % 60;
    let seconds = Math.floor(comparing / (1000)) % 60;
    
    if (years < 10) years = "0" + years
    if (months < 10) months = "0" + months
    if (days < 10) days = "0" + days
    if (hours < 10) hours = "0" + hours
    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds
    time.textContent = `Estou te amando por ${years} Anos ${months} Meses ${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos`
})
