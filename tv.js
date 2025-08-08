//tv.js


    function enterFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) { // Safari
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
      }
    }

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        // ユーザーが再生ボタンを押したときに全画面にする
        video.addEventListener('play', function handlePlayOnce() {
          enterFullscreen(video);
          // 一回だけ発動させたいので、イベントリスナーを外す
          video.removeEventListener('play', handlePlayOnce);
        });
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', function () {
        video.addEventListener('play', function handlePlayOnce() {
          enterFullscreen(video);
          video.removeEventListener('play', handlePlayOnce);
        });
      });
    } else {
      alert("お使いのブラウザはHLSに対応してません");
    }
