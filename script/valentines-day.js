// music display
const player = document.querySelector("#player");
const musicName = document.querySelector("#musicName");
const playPauseButton = document.querySelector("#playPauseButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

const textButtonPlay = "<i class='bi bi-play-fill'></i>";
const textButtonPause = "<i class='bi bi-pause-fill'></i>";

const songs = [
    {
        src: "songs/partilhar.mp3",
        name: "Partilhar - Rubel"
    },
    {
        src: "songs/pra-sonhar.mp3",
        name: "Pra Sonhar - Marcelo Jeneci"
    },
    {
        src: "songs/dia-a-dia.mp3",
        name: "Dia a Dia, Lado a Lado - Tulipa Ruiz"
    },
]


let index = 0;

prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();

playPauseButton.onclick = () => playPause();

const playPause = () => {
    if (player.paused) {
        player.play();
        playPauseButton.innerHTML = textButtonPause;
    } else {
        player.pause();
        playPauseButton.innerHTML = textButtonPlay;
    }
};

player.ontimeupdate = () => updateTime();

const updateTime = () => {
    const currentminutes = Math.floor(player.currentTime / 60);
    const currentSeconds = Math.floor(player.currentTime % 60);
    currentTime.textContent = `${currentminutes}:${formatZero(currentSeconds)}`;

    const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
    const durationMinutes = Math.floor(durationFormatted / 60);
    const durationseconds = Math.floor(durationFormatted % 60);
    duration.textContent = `${durationMinutes}:${formatZero(durationseconds)}`;

    const progressWidth = durationFormatted
        ? (player.currentTime / durationFormatted) * 100
        : 0;
    
    progress.style.width = progressWidth + "%";
};

const formatZero = (n) => (n < 10 ? "0" + n : n);

progressBar.onclick = (e) => {
    const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
    player.currentTime = newTime;
};

const prevNextMusic = (type = "next") => {
    if ((type == "next" && index + 1 === songs.length) || type === "init") {
        index = 0;
    } else if (type == "prev" && index === 0) {
        index = songs.length - 1;
    } else {
        index = type === "prev" && index ? index - 1 : index + 1;
    }
    
    player.src = songs[index].src;
    musicName.innerHTML = songs[index].name;
    if (type !== "init") playPause();

    updateTime();
};

prevNextMusic("init");

// slides
const box = document.querySelector(".sub-container");
const images = document.querySelectorAll(".sub-container img");

let indexImg = 0;

function slider() {
    indexImg++
    if (indexImg > images.length - 1) {
        indexImg = 0;
    }
    box.style.transform = `translateX(${-indexImg * 280}px)`
}

setInterval(slider, 5000);
