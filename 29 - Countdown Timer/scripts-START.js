const timerScreen = document.querySelector('.display__time-left');
const timeBack = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
const form = document.querySelector('#custom');
let countdown;

function timer(seconds) {
    clearInterval(countdown);
    let date = Date.now();
    let dateTimer = date + seconds * 1000;
    displayTime(seconds);
    displayEndTime(dateTimer);

    countdown = setInterval(() => {
        let secondLeft = Math.round((dateTimer - Date.now()) / 1000);
        if (secondLeft <= 0) {
            clearInterval(countdown);
            return;
        }
        displayTime(secondLeft);

    }, 1000)


}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const second = seconds % 60;
    const display = `${minutes} : ${second < 10 ? '0' : ''}${second}`;
    document.title = display;
    timerScreen.textContent = display;
}
function displayEndTime(timestamp) {
    const nowDate = new Date(timestamp);
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    timeBack.textContent = `Back at ${hours > 12 ? hours - 12 : hours}:${minutes > 10 ? '' : 0}${minutes}`;

}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const seconds = this.minutes.value * 60;
    timer(seconds);
    this.reset();
});

