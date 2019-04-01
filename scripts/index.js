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
    this.bpm = MUSIC.techno.bpm;
    this.type = type;
    this.boxElement.style.backgroundColor = color;

    switch (type) {
      case MUSIC.techno.types.beat.type:
        this.audio = new buzz.sound(MUSIC.techno.types.beat.audio);
        break;
      case MUSIC.techno.types.bass.type:
        this.audio = new buzz.sound(MUSIC.techno.types.bass.audio);
        break;
      case MUSIC.techno.types.clap.type:
        this.audio = new buzz.sound(MUSIC.techno.types.clap.audio);
        break;
      case MUSIC.techno.types.fx.type:
        this.audio = new buzz.sound(MUSIC.techno.types.fx.audio);
        break;
    }
  }
}

// -------- //

// TECHNO OBJECTS
const TECHNO_BEAT = new TechnoBox(MUSIC.techno.color, MUSIC.techno.types.beat.type);
console.log("TCL: TECHNO_BEAT", TECHNO_BEAT);

const TECHNO_BASS = new TechnoBox(MUSIC.techno.color, MUSIC.techno.types.bass.type);

const TECHNO_CLAP = new TechnoBox(MUSIC.techno.color, MUSIC.techno.types.clap.type);

const TECHNO_FX = new TechnoBox(MUSIC.techno.color, MUSIC.techno.types.fx.type);
console.log("TCL: TECHNO_FX", TECHNO_FX);

let TECHNO_GROUP = new buzz.group([TECHNO_CLAP.audio]);

for (let key in MUSIC) {
  console.log(key);
}

// -------- //

// CONTROLS
document.querySelector("#play").addEventListener("click", evt => {
  TECHNO_GROUP.loop().play();
});
document.querySelector("#stop").addEventListener("click", evt => {
  TECHNO_GROUP.stop();
});

// -------- //

// DRAG FUNCTIONS
interact(".drop-zone").dropzone({
  accept: ".box",
  ondrop: function(event) {
    console.log("Dropped in!");
    TECHNO_GROUP.loop().play();
  },
  ondragleave: function(event) {
    console.log("Dropped out!");
    TECHNO_GROUP.stop();
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
