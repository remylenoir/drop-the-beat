function getBox() {
  document.querySelectorAll(".box").forEach(box => {
    const audioElement = box.getElementsByTagName("audio");

    if (box.classList.value.includes("active")) {
      playAudio();
    } else {
      stopAudio();
    }

    // Cue-ing the next element based on the first element playing
    function playAudio() {
      if (document.querySelectorAll(".active").length <= 1) {
        audioElement[0].currentTime = 0;
        audioElement[0].play();
      } else {
        let audioCurrentTime = document.querySelectorAll(".active")[0].querySelector("audio")
          .currentTime;
        audioElement[0].currentTime = audioCurrentTime;
        audioElement[0].play();
      }
      // console.log(audioElement[0].currentTime);

      // Gapless loop "polyfill"
      audioElement[0].addEventListener("timeupdate", function() {
        var buffer = 0.22; // for 3.8s loops (or 4 measures)
        if (this.currentTime > this.duration - buffer) {
          this.currentTime = 0;
          this.play();
        }
      });
    }

    function stopAudio() {
      audioElement[0].currentTime = 0;
      audioElement[0].pause();
    }
  });
}
