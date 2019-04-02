// Mapping of the Object to create an Array of classes
// Thus, I can define the arguments of the constructors
// and the constructors themselves automatically

const MUSIC_ARRAY = Object.entries(MUSIC).map(music => {
  // Storing the values to be used as arguments in the params const
  let color = music[1].color;
  let genre = music[1].genre;

  // Assignment of the types' Object to map it
  let loop_types = music[1].types;

  const TYPES_ARRAY = Object.entries(loop_types).map(types => {
    let audio = types[1].audio;
    let type = types[1].type;

    const params = [color, genre, type, audio];

    if (genre === "TECHNO") {
      return new TechnoBox(...params);
    } else if (genre === "LATIN") {
      return new LatinBox(...params);
    }
  });
  return TYPES_ARRAY;
});

// Flattening of the Array in order to be destructured
let objectsInstances = MUSIC_ARRAY.flat();
// Destructuring the Array - THE ORDER MATTERS !!!
const [
  TECHNO_BEAT,
  TECHNO_BASS,
  TECHNO_CLAP,
  TECHNO_FX,
  //
  LATIN_BEAT,
  LATIN_BASS,
  LATIN_CONGA
] = MUSIC_ARRAY;

// console.log("Beat:", TECHNO_BEAT);
// console.log("Bass:", TECHNO_BASS);
// console.log("Clap:", TECHNO_CLAP);
// console.log("Fx:", TECHNO_FX);
// console.log("Beat:", LATIN_BEAT);
// console.log("Bass:", LATIN_BASS);
// console.log("Conga:", LATIN_CONGA);
