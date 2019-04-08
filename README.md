# DROP THE BEAT

Drop The Beat is a music experience game that makes you become a great DJ!

PLAY : [Click here to play](https://remylenoir.github.io/drop-the-beat/) - **Notice:** This is a web experiment which only works with Google Chrome.

This game was made during the first module of the [Ironhack Web Development Bootcamp](https://www.ironhack.com/en).

## Prizes
**Best soundtrack:** First place :1st_place_medal:  
**Best game:** Second place :2nd_place_medal:  

_Votes from the class_

---

## Challenges:

### Code structure and automation for better scalability

Automate the creation of the music boxes for all genres and also the creation + the assignation of the audio elements to their music boxes.

Every music box is automatically created from one core Object.

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

I've mapped the keys/values in order to assign the values as arguments in the constructors.

```javascript
const TYPES_ARRAY = Object.entries(loop_types).map(types => {
  let audio = types[1].audio;
  let type = types[1].type;
  let image = types[1].image;

  const PARAMS = [color, genre, type, image, audio];

  if (genre === "TECHNO") {
    return new TechnoBox(...PARAMS);
  } else if (genre === "LATINO") {
    return new LatinoBox(...PARAMS);
  } else if (genre === "ROCK") {
    return new RockBox(...PARAMS);
  }
});
return TYPES_ARRAY;
```

Every value is then assigned in the constructor

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

---

### Draggable elements

**Drag & Drop functionality**

For a better user experience I wanted the user to drag the music element and drop it into the "Drop Zone".
I've first tried different libraries (jQuery UI Draggable/Droppable, Interact.js, GSAP...) to finally go for the native DOM events, that was giving me more flexibility and a better performance.
More info on [the MDN - Drag & drop events](https://developer.mozilla.org/en-US/docs/Web/API/Document#Drag_drop_events).

---

### Audio issues

**Audio loop gap**

When you loop a HTML5 audio element, a small gap is happening between each loop.
To remove this gap, I added an Event Listener on the audio elements, that resets the Current Time of the track with a calculation based on a buffer value. I found this solution on [Stackoverflow - creation of a buffer](https://stackoverflow.com/a/36720740).

```javascript
AUDIO_ELEMENT[0].addEventListener("timeupdate", function() {
  const BUFFER = 0.22; // for 3.8s loops (or 4 times at 128bpm)
  if (this.currentTime > this.duration - BUFFER) {
    this.currentTime = 0;
    this.play();
  }
});
```

**Sounds' synch playback**

The main functionality of the game is the playback of numerous audio files at the same time, thus, they need to be synchronized. I created loops with same length and tempo (128bpm) using the [GarageBand](https://fr.wikipedia.org/wiki/GarageBand) app, then with calculation, each time a new music box is dropped, the playback is "reset" and starts again from the Current Time of the previous element.

```javascript
let audioCurrentTime = document.querySelectorAll(".active")[0].querySelector("audio").currentTime;
AUDIO_ELEMENT[0].currentTime = audioCurrentTime;
AUDIO_ELEMENT[0].play();
```

---

## Icons Credits:

- Drum, Maracas, Bass, Guitars, Headphones, Move: made by [Freepik](https://www.freepik.com/)
- Synthesizer: made by [Eucalyp](https://www.flaticon.com/authors/eucalyp)
- Clapping hands, Triangle: made by [Smashicons](https://www.flaticon.com/authors/smashicons)
- Pulse: made by [Prosymbols](https://www.flaticon.com/authors/prosymbols)
- Conga: made by [Iconnice](https://www.flaticon.com/authors/iconnice)
- Refresh: made by [Becris](https://www.flaticon.com/authors/becris)
- Light bulb: made by [Puppets](https://www.flaticon.com/authors/puppets)

_Creative Commons BY 3.0_
