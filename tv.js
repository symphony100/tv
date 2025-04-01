//tv.js

        // トグルスイッチ要素の取得
        const toggle = document.getElementById('auto-fullscreen-toggle');
        const video = document.getElementById('video');

        // 初期化: 設定値をローカルストレージから取得して適用
        document.addEventListener('DOMContentLoaded', () => {
            const isAutoFullscreen = localStorage.getItem('autoFullscreen') === 'true';
            toggle.checked = isAutoFullscreen;

            // 有効な場合、自動全画面表示
            if (isAutoFullscreen && video) {
                enableFullscreen(video);
            }
        });

        // トグルの状態変化を監視し、設定を保存
        toggle.addEventListener('change', () => {
            const isChecked = toggle.checked;
            localStorage.setItem('autoFullscreen', isChecked);

            // 有効なら全画面表示を実行
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
