// Elements
const startCameraBtn = document.querySelector('[data-video-botao]');
const camera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const snapshot = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const message = document.querySelector('[data-mensagem]');
const sendPhoto = document.querySelector('[data-enviar]');

let urlImg = '';

// Events
startCameraBtn.addEventListener('click', async function () {
    const startVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    startCameraBtn.style.display = 'none';
    camera.style.display = 'block';

    video.srcObject = startVideo;
});

snapshot.addEventListener('click', () => {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    urlImg = canvas.toDataURL('image/jpeg');

    camera.style.display = 'none';
    message.style.display = 'block';
});

sendPhoto.addEventListener('click', () => {
    const receiveExistingData = localStorage.getItem('cadastro');
    const convert = JSON.parse(receiveExistingData);

    convert.image = urlImg;

    localStorage.setItem('cadastro', JSON.stringify(convert));

    window.location.href = '../pages/abrir-conta-form-3.html';
})