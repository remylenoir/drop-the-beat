# DROP THE BEAT

**Notice: This web experiment is only working with Google Chrome.**

## Problems faced:

- Automate the creation of the music boxes for all genres,
- Automate the creation + the assignation of the audio elements to their music boxes:

Every music box is automatically created from one core Object.
I've mapped the keys/values in order to assign the values as arguments in my constructors.

```javascript
const MUSIC = {
  techno: {
    genre: "TECHNO",
    color: "#c3ec52",
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
      }
    // ... and so on
```

```javascript
class TechnoBox extends Box {
  constructor(color, genre, type, image, audio) {
    super();
    this.type = type;
    this.image = image;
    this.genre = genre;
    this.audio = audio;
    this.audioElement.src = audio;
    this.classGenre = genre.toLowerCase();
    this.boxElement.classList.add(this.classGenre);
    this.boxElement.style.backgroundColor = color;
    this.boxElement.style.backgroundImage = `url('${image}')`;
  }
}
```

- Drag & Drop elements: I've first tried different libraries (jQuery UI, Interact.js, GSAP) to finally go for the native DOM events. [DOM - Drag & drop events](https://developer.mozilla.org/en-US/docs/Web/API/Document#Drag_drop_events)
- Remove the gap between each loop of the HTML5 audio elements: [creation of a buffer function](https://stackoverflow.com/a/36720740)

```javascript
AUDIO_ELEMENT[0].addEventListener("timeupdate", function() {
  const BUFFER = 0.22; // for 3.8s loops (or 4 times at 128bpm)
  if (this.currentTime > this.duration - BUFFER) {
    this.currentTime = 0;
    this.play();
  }
});
```

- Sounds' synch playback: solution = all the audio files have the same lenght/tempo + with some calculation, each time we drop a new music box, the playback starts from the currentTime of the previous element.

## Icons Credits:

- Drum, Maracas, Bass, Guitars, Earphones: made by [Freepik](https://www.freepik.com/)
- Synthetiser: made by [Eucalyp](https://www.flaticon.com/authors/eucalyp)
- Clapping hands, Triangle: made by [Smashicons](https://www.flaticon.com/authors/smashicons)
- Pulse: made by [Prosymbols](https://www.flaticon.com/authors/prosymbols)
- Conga: made by [Iconnice](https://www.flaticon.com/authors/iconnice)
- Refresh: made by [Becris](https://www.flaticon.com/authors/becris)

_Creative Commons BY 3.0_
