// Mapping of MUSIC (main Object) and storing of arguments
// to automate the creation of each constructor

const MUSIC_ARRAY = Object.entries(MUSIC).map(music => {
  // Storing the types' values to use them in the PARAMS
  let color = music[1].color;
  let genre = music[1].genre;
  let loop_types = music[1].types;

  // Mapping of the types to store the values as arguments
  const TYPES_ARRAY = Object.entries(loop_types).map(types => {
    let audio = types[1].audio;
    let type = types[1].type;
    let image = types[1].image;

    const PARAMS = [color, genre, type, image, audio];

    // Automatic creation of each element based on MUSIC (main Object)
    if (genre === "TECHNO") {
      return new TechnoBox(...PARAMS);
    } else if (genre === "LATINO") {
      return new LatinoBox(...PARAMS);
    } else if (genre === "ROCK") {
      return new RockBox(...PARAMS);
    }
  });
  return TYPES_ARRAY;
});

// Flattening of the Array in order to be destructured
// let objectsInstances = MUSIC_ARRAY.flat();
// Destructuring the Array - THE CONST ORDER MATTERS !!!
// const [TECHNO_BEAT, TECHNO_BASS, TECHNO_CLAP, TECHNO_FX] = MUSIC_ARRAY[0];
