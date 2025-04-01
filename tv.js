//tv.js

document.getElementById('startButton').addEventListener('click', () => {
    const video = document.getElementById('video');
    video.muted = true; // 音声をミュート
    video.play(); // 再生
    enableFullscreen(video); // 全画面表示
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
