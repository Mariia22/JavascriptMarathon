const video = document.querySelector('.viewer');
const button = document.querySelector('.toggle');
const skip = document.querySelectorAll('[data-skip]');
const range = document.querySelectorAll('.player__slider');

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

function handleRange() {
    video[this.name] = this.value;
}

skip.forEach(buttonSkip => buttonSkip.addEventListener('click', skipVideo));
range.forEach(buttonRange => buttonRange.addEventListener('mousemove', handleRange));

video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
button.addEventListener('click', toggleVideo);