// PATHS
const ASSETS_DIRECTORY = "assets";
const SOUNDS_DIRECTORY = `${ASSETS_DIRECTORY}/sounds`;

// DOM
const BASE_ZONE = document.querySelector(".base-zone");

// OBJECTS
const MUSIC = {
  techno: {
    genre: "TECHNO",
    bpm: 128,
    color: "#0ffff0",
    types: {
      beat: {
        type: "BEAT",
        audio: `${SOUNDS_DIRECTORY}/techno-beat.mp3`
      },
      bass: {
        type: "BASS",
        audio: `${SOUNDS_DIRECTORY}/techno-bass.mp3`
      },
      clap: {
        type: "CLAP",
        audio: `${SOUNDS_DIRECTORY}/techno-clap.mp3`
      },
      fx: {
        type: "FX",
        audio: `${SOUNDS_DIRECTORY}/techno-fx.mp3`
      }
    }
  },
  latin: {
    genre: "LATIN",
    bpm: 128,
    color: "#00ff00",
    types: {
      beat: {
        type: "BEAT",
        audio: `${SOUNDS_DIRECTORY}/latin-beat.mp3`
      },
      bass: {
        type: "BASS",
        audio: `${SOUNDS_DIRECTORY}/latin-bass.mp3`
      },
      conga: {
        type: "CONGA",
        audio: `${SOUNDS_DIRECTORY}/latin-conga.mp3`
      }
    }
  }
};
