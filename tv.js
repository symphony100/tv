//tv.js

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    if (video) {
        enableFullscreen(video);
    }
});

function enableFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
