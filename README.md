# DROP THE BEAT

**Notice: This web experiment is only working with Google Chrome**

## Problems faced:

- Automate the creation of every instances from one input Object

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
      } // ... and so on
```

- Automate the creation and the assignation of every audio elements for each instance
- Drag & Drop elements: solution = [DOM - Drag & drop events](https://developer.mozilla.org/en-US/docs/Web/API/Document#Drag_drop_events)
- HTML5 audio loops have a break between each loop: solution = [creation of a buffer function](https://stackoverflow.com/a/36720740)
- Sounds' synch playback: solution = all the audio files have the same lenght/tempo + with some calculation, each time we drop a new element, the playback starts from the currentTime of the previous element.

## Icons Credits:

- Drum, Maracas, Bass, Guitars, Earphones: made by [Freepik](https://www.freepik.com/)
- Synthetiser: made by [Eucalyp](https://www.flaticon.com/authors/eucalyp)
- Clapping hands, Triangle: made by [Smashicons](https://www.flaticon.com/authors/smashicons)
- Pulse: made by [Prosymbols](https://www.flaticon.com/authors/prosymbols)
- Conga: made by [Iconnice](https://www.flaticon.com/authors/iconnice)
- Refresh: made by [Becris](https://www.flaticon.com/authors/becris)

_Creative Commons BY 3.0_
