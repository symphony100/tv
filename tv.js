//tv.js

        // トグルスイッチとビデオ要素を取得
        const toggle = document.getElementById('auto-fullscreen-toggle');
        const video = document.getElementById('video');

        // ページロード時にローカルストレージの状態を確認し自動実行
        document.addEventListener('DOMContentLoaded', () => {
            const isAutoFullscreen = localStorage.getItem('autoFullscreen') === 'true';

            // トグルスイッチの状態を反映
            toggle.checked = isAutoFullscreen;

            // 状態が有効であれば全画面を自動実行
            if (isAutoFullscreen && video) {
                enableFullscreen(video);
            }
        });

        // トグルスイッチの変更を保存し、状態に応じて動作
        toggle.addEventListener('change', () => {
            const isChecked = toggle.checked;
            localStorage.setItem('autoFullscreen', isChecked);

            if (isChecked) {
                enableFullscreen(video); // 全画面表示を有効化
            } else {
                disableFullscreen(); // 全画面表示を解除
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
