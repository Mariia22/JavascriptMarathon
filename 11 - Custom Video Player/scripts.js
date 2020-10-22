const video = document.querySelector('.viewer');
const button = document.querySelector('.toggle');
const skip = document.querySelectorAll('[data-skip]');
const range = document.querySelectorAll('.player__slider');
const progressFilled = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');

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

function updateProgress() {
    let scrubTime = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${scrubTime}%`;

}
function handleVideo(e) {
    let handleTime = (e.offsetX / progress.offsetWidth) * video.duration;
    console.log(handleTime);
    video.currentTime = handleTime;
}

skip.forEach(buttonSkip => buttonSkip.addEventListener('click', skipVideo));
range.forEach(buttonRange => buttonRange.addEventListener('mousemove', handleRange));

video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);
button.addEventListener('click', toggleVideo);
let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && handleVideo(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);