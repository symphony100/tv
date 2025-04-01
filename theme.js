// theme.js

// theme.js

// 設定データを取得する（ローカルストレージから）
function getAutoFullscreenSetting() {
    return localStorage.getItem('autoFullscreen') === 'true';
}

// 設定データを保存する（ローカルストレージに）
function setAutoFullscreenSetting(value) {
    localStorage.setItem('autoFullscreen', value);
}

// 全画面表示を有効にする
function enableFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

// 全画面表示を終了する
function disableFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// ページが読み込まれたときに自動実行
document.addEventListener('DOMContentLoaded', () => {
    const isAutoFullscreen = getAutoFullscreenSetting();
    const video = document.getElementById('video');

    if (isAutoFullscreen && video) {
        enableFullscreen(video);
    }
});

