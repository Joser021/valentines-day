const box = document.querySelector(".container");
const images = document.querySelectorAll(".container img");

let index = 0;

function slider() {
    index++
    if (index > images.length - 1) {
        index = 0;
    }
    box.style.transform = `translateX(${-index * 400}px)`
}

setInterval(slider, 5000);
