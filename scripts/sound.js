// SOUND
// const TECHNO_BEAT_LOOP = new buzz.sound(TECHNO_BEAT.audio);
// const TECHNO_CLAP_LOOP = new buzz.sound(TECHNO_CLAP.audio);

// let TECHNO_GROUP = new buzz.group([TECHNO_CLAP.audio]);

// -------- //

// CONTROLS
let metronome = new Audio();
metronome.src = `${SOUNDS_DIRECTORY}/metronome.mp3`;
metronome.loop = true;
// metronome.play();

// SOUND
let boxes = document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", evt => {
    box.classList.toggle("active");

    let audioElement = box.getElementsByTagName("audio");

    function play() {
      // isPlaying(audioElement[0]);
      audioElement[0].play();
    }
    function stop() {
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

    // HOWLER
    // let audioElement = box.getElementsByTagName("audio");
    // var sound = new Howl({
    //   src: [audioElement[0].src],
    //   loop: true
    // });

    // document.querySelector("#rate").addEventListener("click", evt => {
    //   speed();
    // });

    // function play() {
    //   sound.play();
    // }
    // function stop() {
    //   sound.stop();
    // }
    // function speed() {
    //   sound.rate(1.3);
    // }
  });
});
