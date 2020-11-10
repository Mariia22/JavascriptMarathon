const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function playVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(mediaStream => {
            //console.log(mediaStream);
            //video.src = window.URL.createObjectURL(mediaStream);
            video.srcObject = mediaStream;
            video.play();

        })
        .catch(err => {
            console.log("Error", err.message);
        });
}

function paintCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height)
    }, 16

    )
}

function takePhoto() {

}

playVideo();
video.addEventListener('canplay', paintCanvas);