const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
    {
        title: "Pehly Bhi Main",
        artist: "Vishal Mishra",
        src: "Pehle Bhi Main.mp3",
        cover: "Pehle Bhi Main Cover Img.jpg"
    },
    {
        title: "Tere Hawaale",
        artist: "Arijit Singh",
        src: "Tere Hawaale.mp3",
        cover: "Tere Hawaale Cover Img.jpg"
    },
    {
        title: "Kaise Hua",
        artist: "Vishal Mishra",
        src: "Kaise Hua.mp3",
        cover: "Kaise Hua Cover Img.jpg"
    }
];

let songIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    document.querySelector('.cover img').src = song.cover;
}

function playSong() {
    audio.play();
    playBtn.textContent = 'Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = 'Play';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = playBtn.textContent === 'Pause';
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);

// Load the initial song
loadSong(songs[songIndex]);
