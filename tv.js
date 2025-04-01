//tv.js

// ページロード時に設定を読み込み、自動全画面を実行
document.addEventListener('DOMContentLoaded', () => {
    const isAutoFullscreen = localStorage.getItem('autoFullscreen') === 'true';
    toggle.checked = isAutoFullscreen;

    // 自動全画面表示を有効化
    if (isAutoFullscreen && video) {
        enableFullscreen(video);
    }
});

// トグルスイッチの状態監視し設定を保存
toggle.addEventListener('change', () => {
    const isChecked = toggle.checked;
    localStorage.setItem('autoFullscreen', isChecked);

    // 状態に応じた動作を実行
    if (isChecked) {
        enableFullscreen(video);
    } else {
        disableFullscreen();
    }
});

// 全画面表示を有効にする関数
function enableFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

// 全画面表示を解除する関数
function disableFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
