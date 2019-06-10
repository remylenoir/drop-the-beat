function soundPlayback() {
  document.querySelectorAll('.box').forEach(box => {
    const AUDIO_ELEMENT = box.getElementsByTagName('audio');

    // Cue-ing the dropped element based on the first element currentTime
    function playAudio() {
      if (document.querySelectorAll('.active').length < 1) {
        AUDIO_ELEMENT[0].currentTime = 0;
        AUDIO_ELEMENT[0].play();
      } else {
        let audioCurrentTime = document.querySelectorAll('.active')[0].querySelector('audio')
          .currentTime;
        AUDIO_ELEMENT[0].currentTime = audioCurrentTime;
        AUDIO_ELEMENT[0].play();
      }

      // Gapless loop "polyfill"
      AUDIO_ELEMENT[0].addEventListener('timeupdate', function() {
        const BUFFER = 0.22; // for 3.8s loops (or 4 times at 128bpm)
        if (this.currentTime > this.duration - BUFFER) {
          this.currentTime = 0;
          this.play();
        }
      });
    }

    function stopAudio() {
      AUDIO_ELEMENT[0].currentTime = 0;
      AUDIO_ELEMENT[0].pause();
    }

    if (box.classList.value.includes('active')) {
      playAudio();
    } else {
      box.classList.remove('active');
      stopAudio();
    }
  });
}
