// PATHS
const ASSETS_DIRECTORY = "assets";
const SOUNDS_DIRECTORY = `${ASSETS_DIRECTORY}/sounds`;

// DOM
const BASE_ZONE = document.querySelector(".base-zone");

// OBJECTS
const MUSIC = {
  techno: {
    gender: "Techno",
    bpm: 128,
    color: "#0ffff0",
    types: {
      beat: {
        type: "beat",
        audio: `${SOUNDS_DIRECTORY}/techno-beat.mp3`
      },
      fx: {
        type: "fx",
        audio: `${SOUNDS_DIRECTORY}/techno-fx.mp3`
      }
    }
  },
  latino: {
    gender: "Latino",
    bpm: 128,
    color: "#0ffff0",
    types: {
      beat: {
        type: "beat",
        audio: `${SOUNDS_DIRECTORY}/techno-beat.mp3`
      },
      fx: {
        type: "fx",
        audio: `${SOUNDS_DIRECTORY}/techno-fx.mp3`
      }
    }
  }
};
