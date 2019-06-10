// PATHS
const ASSETS_DIRECTORY = 'assets';
const IMAGE_DIRECTORY = `${ASSETS_DIRECTORY}/images`;
const SOUNDS_DIRECTORY = `${ASSETS_DIRECTORY}/sounds`;

// DOM
const DROP_ZONE = document.querySelector('.drop-zone');
const BASE_ZONE = document.querySelector('.base-zone');

const CONTAINER = document.querySelector('.container');

// MAIN OBJECT
const MUSIC = {
  techno: {
    genre: 'TECHNO',
    color: '#c3ec52',
    types: {
      beat: {
        type: 'BEAT',
        image: `${IMAGE_DIRECTORY}/icon-drum.svg`,
        audio: `${SOUNDS_DIRECTORY}/techno-beat.mp3`
      },
      synth: {
        type: 'SYNTH',
        image: `${IMAGE_DIRECTORY}/icon-synth.svg`,
        audio: `${SOUNDS_DIRECTORY}/techno-synth.mp3`
      },
      clap: {
        type: 'CLAP',
        image: `${IMAGE_DIRECTORY}/icon-clap.svg`,
        audio: `${SOUNDS_DIRECTORY}/techno-clap.mp3`
      },
      fx: {
        type: 'FX',
        image: `${IMAGE_DIRECTORY}/icon-fx.svg`,
        audio: `${SOUNDS_DIRECTORY}/techno-fx.mp3`
      }
    }
  },
  latino: {
    genre: 'LATINO',
    color: '#ff7863',
    types: {
      beat: {
        type: 'BEAT',
        image: `${IMAGE_DIRECTORY}/icon-drum.svg`,
        audio: `${SOUNDS_DIRECTORY}/latino-beat.mp3`
      },
      maracas: {
        type: 'MARACAS',
        image: `${IMAGE_DIRECTORY}/icon-maracas.svg`,
        audio: `${SOUNDS_DIRECTORY}/latino-maracas.mp3`
      },
      conga: {
        type: 'CONGA',
        image: `${IMAGE_DIRECTORY}/icon-conga.svg`,
        audio: `${SOUNDS_DIRECTORY}/latino-conga.mp3`
      },
      triangle: {
        type: 'TRIANGLE',
        image: `${IMAGE_DIRECTORY}/icon-triangle.svg`,
        audio: `${SOUNDS_DIRECTORY}/latino-triangle.mp3`
      }
    }
  },
  rock: {
    genre: 'ROCK',
    color: '#ffb941',
    types: {
      beat: {
        type: 'BEAT',
        image: `${IMAGE_DIRECTORY}/icon-drum.svg`,
        audio: `${SOUNDS_DIRECTORY}/rock-beat.mp3`
      },
      bass: {
        type: 'BASS',
        image: `${IMAGE_DIRECTORY}/icon-bass.svg`,
        audio: `${SOUNDS_DIRECTORY}/rock-bass.mp3`
      },
      guitar: {
        type: 'GUITAR',
        image: `${IMAGE_DIRECTORY}/icon-guitar.svg`,
        audio: `${SOUNDS_DIRECTORY}/rock-guitar.mp3`
      },
      lead: {
        type: 'LEAD',
        image: `${IMAGE_DIRECTORY}/icon-lead-guitar.svg`,
        audio: `${SOUNDS_DIRECTORY}/rock-lead-guitar.mp3`
      }
    }
  }
};
