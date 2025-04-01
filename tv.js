//tv.js

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');

    if (video) {
        // 動画の再生イベントを監視
        video.addEventListener('play', () => {
            enableFullscreen(video); // 動画が再生されたら全画面表示
        });
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
