let activeBoxes = 0;

function getBox() {
  document.querySelectorAll(".box").forEach(box => {
    const audioElement = box.getElementsByTagName("audio");

    // Cue-ing the next element based on the first element playing
    function playAudio() {
      if (document.querySelectorAll(".active").length < 1) {
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

    if (box.classList.value.includes("active")) {
      playAudio();
    } else {
      stopAudio();
    }

    // if (activeBoxes > 0 && activeBoxes < 2) {
    //   console.log(activeBoxes, "Good start");
    // } else if (activeBoxes > 2 && activeBoxes < 4) {
    //   console.log(activeBoxes, "Getting there");
    // } else if (activeBoxes > 4 && activeBoxes < 8) {
    //   console.log(activeBoxes, "You are the master!");
    // } else if (activeBoxes > 8) {
    //   console.log(activeBoxes, "Unstoppable!");
    // }
  });
}

// BUTTON_TECHNO.onclick = function() {
//   TECHNO_ZONE.classList.toggle("active");
//   LATINO_ZONE.classList.remove("active");
//   ACOUSTIC_ZONE.classList.remove("active");
// };

// BUTTON_LATINO.onclick = function() {
//   TECHNO_ZONE.classList.remove("active");
//   LATINO_ZONE.classList.toggle("active");
//   ACOUSTIC_ZONE.classList.remove("active");
//   getBox();
// };

// BUTTON_ACOUSTIC.onclick = function() {
//   TECHNO_ZONE.classList.remove("active");
//   LATINO_ZONE.classList.remove("active");
//   ACOUSTIC_ZONE.classList.toggle("active");
//   getBox();
// };
