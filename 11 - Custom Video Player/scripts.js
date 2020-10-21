const video = document.querySelector('.viewer');
const button = document.querySelector('.toggle');
const skip = document.querySelectorAll('[data-skip]');

function toggleVideo() {
    let method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    let buttonToggle = video.paused ? '►' : '||';
    button.innerText = buttonToggle;
}

function skipVideo() {
    video.currentTime += parseInt(this.dataset.skip);
}

skip.forEach(buttonSkip => buttonSkip.addEventListener('click', skipVideo))

video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
button.addEventListener('click', toggleVideo);