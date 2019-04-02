// SOUND
// const TECHNO_BEAT_LOOP = new buzz.sound(TECHNO_BEAT.audio);
// const TECHNO_CLAP_LOOP = new buzz.sound(TECHNO_CLAP.audio);

// let TECHNO_GROUP = new buzz.group([TECHNO_CLAP.audio]);

// -------- //

// CONTROLS
// document.querySelector("#stop").addEventListener("click", evt => {
//   buzz.all().stop();
// });

// SOUND
let boxes = document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", evt => {
    box.classList.toggle("active");

    function play() {
      let audioElement = box.getElementsByTagName("audio");
      audioElement[0].play();
    }
    function stop() {
      let audioElement = box.getElementsByTagName("audio");
      audioElement[0].pause();
      audioElement[0].currentTime = 0;
    }

    if (box.classList.value.includes("active")) {
      console.log("Active > Play!");
      play();
    } else {
      console.log("Not active > Stop!");
      stop();
    }
  });
});
