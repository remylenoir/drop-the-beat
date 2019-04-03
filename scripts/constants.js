// PATHS
const ASSETS_DIRECTORY = "assets";
const IMAGE_DIRECTORY = `${ASSETS_DIRECTORY}/images`;
const SOUNDS_DIRECTORY = `${ASSETS_DIRECTORY}/sounds`;

// DOM
const DROP_ZONE = document.querySelector(".drop-zone");
const BASE_ZONE = document.querySelector(".base-zone");

// OBJECTS
const MUSIC = {
  techno: {
    genre: "TECHNO",
    color: "#79e18f",
    types: {
      beat: {
        type: "BEAT",
        image: `${IMAGE_DIRECTORY}/icon-drum.svg`,
        audio: `${SOUNDS_DIRECTORY}/techno-beat.mp3`
      },
      bass: {
        type: "SYNTH",
        image: `${IMAGE_DIRECTORY}/icon-synth.svg`,
        audio: `${SOUNDS_DIRECTORY}/techno-synth.mp3`
      },
      clap: {
        type: "CLAP",
        image: `${IMAGE_DIRECTORY}/icon-clap.svg`,
        audio: `${SOUNDS_DIRECTORY}/techno-clap.mp3`
      },
      fx: {
        type: "FX",
        image: `${IMAGE_DIRECTORY}/icon-fx.svg`,
        audio: `${SOUNDS_DIRECTORY}/techno-fx.mp3`
      }
    }
  }
  // ,
  // latin: {
  //   genre: "LATIN",
  //   color: "#e17983",
  //   types: {
  //     beat: {
  //       type: "BEAT",
  //       audio: `${SOUNDS_DIRECTORY}/latin-beat.mp3`
  //     },
  //     bass: {
  //       type: "BASS",
  //       audio: `${SOUNDS_DIRECTORY}/latin-bass.mp3`
  //     },
  //     conga: {
  //       type: "CONGA",
  //       audio: `${SOUNDS_DIRECTORY}/latin-conga.mp3`
  //     }
  //   }
  // }
};
