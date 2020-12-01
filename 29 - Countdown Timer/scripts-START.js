const timerScreen = document.querySelector('.display__time-left');
const timeBack = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
let countdown;

function timer(seconds) {
    let date = Date.now();
    let dateTimer = date + seconds * 1000;
    displayTime(seconds);

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
    console.log(seconds);
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

