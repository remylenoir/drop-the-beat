class Box {
  constructor(color, genre, type, audio) {
    this.type = type;
    this.audio = audio;
    this.genre = genre;

    this.classBox = "box";
    this.boxElement = document.createElement("div");
    this.boxElement.classList.add(this.classBox);
    BASE_ZONE.appendChild(this.boxElement);

    if (color) {
      this.boxElement.style.backgroundColor = color;
    } else {
      this.boxElement.style.backgroundColor = "#e9e9e9";
    }
  }
}

class TechnoBox extends Box {
  constructor(color, genre, type, audio) {
    super();
    this.type = type;
    this.audio = audio;
    this.genre = genre;
    this.classGenre = genre.toLowerCase();
    this.boxElement.classList.add(this.classGenre);
    this.boxElement.style.backgroundColor = color;

    new buzz.sound(this.audio);
  }
}

class LatinBox extends Box {
  constructor(color, genre, type, audio) {
    super();
    this.type = type;
    this.audio = audio;
    this.classGenre = genre.toLowerCase();
    this.genre = genre;
    this.boxElement.classList.add(this.classGenre);
    this.boxElement.style.backgroundColor = color;

    new buzz.sound(this.audio);
  }
}

// -------- //

const MUSIC_ARRAY = Object.entries(MUSIC).map(music => {
  // let object = music[1];
  // console.log("Object:", object);

  let color = music[1].color;
  let genre = music[1].genre;

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

var objectsInstances = MUSIC_ARRAY.flat();
const [
  TECHNO_BEAT,
  TECHNO_BASS,
  TECHNO_CLAP,
  TECHNO_FX,
  LATIN_BEAT,
  LATIN_BASS,
  LATIN_CONGA
] = objectsInstances;

console.log("Beat:", TECHNO_BEAT);
console.log("Bass:", TECHNO_BASS);
console.log("Clap:", TECHNO_CLAP);
console.log("Fx:", TECHNO_FX);
console.log("Beat:", LATIN_BEAT);
console.log("Bass:", LATIN_BASS);
console.log("Conga:", LATIN_CONGA);

// let TECHNO_GROUP = new buzz.group([TECHNO_CLAP.audio]);

// -------- //

// CONTROLS
// document.querySelector("#play").addEventListener("click", evt => {
//   TECHNO_GROUP.loop().play();
// });
// document.querySelector("#stop").addEventListener("click", evt => {
//   TECHNO_GROUP.stop();
// });

// -------- //

// DRAG FUNCTIONS
interact(".drop-zone").dropzone({
  accept: ".box",
  ondrop: function(event) {
    console.log("Dropped in!");
    // TECHNO_GROUP.loop().play();
  },
  ondragleave: function(event) {
    console.log("Dropped out!");
    // TECHNO_GROUP.stop();
  }
});

var gridTarget = interact.createSnapGrid({
  x: 70,
  y: 70,
  range: 5,
  offset: { x: 5, y: 10 }
});

interact(".box").draggable({
  inertia: true,
  max: Infinity,
  snap: { targets: [gridTarget] },
  onmove: dragMoveListener
});

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  (x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx),
    (y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy);

  // translate the element
  target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}
