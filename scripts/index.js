class Box {
  constructor(color, type) {
    this.type = type;
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
  constructor(color, type) {
    super();
    this.gender = MUSIC.techno.gender;
    this.type = type;
    this.boxElement.style.backgroundColor = color;

    console.log(type);

    switch (type) {
      case "BEAT":
        this.audio = new buzz.sound(MUSIC.techno.types.beat.audio);
        break;
      case "BASS":
        this.audio = new buzz.sound(MUSIC.techno.types.bass.audio);
        break;
      case "CLAP":
        this.audio = new buzz.sound(MUSIC.techno.types.clap.audio);
        break;
      case "FX":
        this.audio = new buzz.sound(MUSIC.techno.types.fx.audio);
        break;
    }
  }
}

class LatinBox extends Box {
  constructor(color, type) {
    super();
    this.gender = MUSIC.latin.gender;
    this.type = type;
    this.boxElement.style.backgroundColor = color;

    switch (type) {
      case "BEAT":
        this.audio = new buzz.sound(MUSIC.latin.types.beat.audio);
        break;
      case "BASS":
        this.audio = new buzz.sound(MUSIC.latin.types.bass.audio);
        break;
      case "CONGA":
        this.audio = new buzz.sound(MUSIC.latin.types.conga.audio);
        break;
    }
  }
}

// -------- //

const MUSIC_ARRAY = Object.entries(MUSIC).map(music => {
  // let object = music[1];
  // console.log("Object:", object);

  let color = music[1].color;
  let genre = music[1].genre;
  let loop_type = music[1].types;

  const TYPES_ARRAY = Object.entries(loop_type).map(type => {
    const params = [color, type];
    const audioFile = type[1].audio;

    if (genre === "TECHNO") {
      return new TechnoBox(...params), new buzz.sound(audioFile);
    } else if (genre === "LATIN") {
      return new LatinBox(...params);
    }
  });
  return TYPES_ARRAY;
});

var objectsInstances = MUSIC_ARRAY.flat();
console.log(objectsInstances);

// const TECHNO_BEAT = objectsInstances[0];
// const TECHNO_BASS = objectsInstances[1];
// const TECHNO_CLAP = objectsInstances[2];
// const TECHNO_FX = objectsInstances[3];

// Montasar
// ^^^^^^^^
// const array = MUSIC.map(genre => {
//   let color = genre.color;
//   // let bpm = genre .bpm
//   return types.map(type => {
//       const params = [color, type]
//       if  (genre === "TECHNO") return new TechnoBox(...params);
//       else if (1) //                return new LatinBox()

//   })
// })

// TECHNO OBJECTS
// const TECHNO_BEAT = new TechnoBox(MUSIC.techno.color, MUSIC.techno.types.beat.type);
// const TECHNO_BASS = new TechnoBox(MUSIC.techno.color, MUSIC.techno.types.bass.type);
// const TECHNO_CLAP = new TechnoBox(MUSIC.techno.color, MUSIC.techno.types.clap.type);
// const TECHNO_FX = new TechnoBox(MUSIC.techno.color, MUSIC.techno.types.fx.type);

// let TECHNO_GROUP = new buzz.group([TECHNO_CLAP.audio]);

// -------- //

// CONTROLS
document.querySelector("#play").addEventListener("click", evt => {
  buzz
    .all()
    .loop()
    .play();
});
document.querySelector("#stop").addEventListener("click", evt => {
  buzz.all().stop();
});

// -------- //

// DRAG FUNCTIONS
interact(".drop-zone").dropzone({
  accept: ".box",
  ondrop: function(event) {
    console.log("Dropped in!");
    buzz
      .all()
      .loop()
      .play();
  },
  ondragleave: function(event) {
    console.log("Dropped out!");
    buzz.all().stop();
  }
});

interact(".box").draggable({
  inertia: true,
  max: Infinity,
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
