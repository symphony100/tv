//tv.js

//ページをアクセスした場合に、全画面表示にする。
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
