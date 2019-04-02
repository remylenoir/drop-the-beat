// SOUND
const TECHNO_BEAT_LOOP = new buzz.sound(TECHNO_BEAT.audio);
const TECHNO_CLAP_LOOP = new buzz.sound(TECHNO_CLAP.audio);

// let TECHNO_GROUP = new buzz.group([TECHNO_CLAP.audio]);

// -------- //

// CONTROLS
document.querySelector("#stop").addEventListener("click", evt => {
  buzz.all().stop();
});
