class Box {
  constructor(color, genre, type, audio) {
    this.type = type;
    this.audio = audio;
    this.genre = genre;

    this.classBox = "box";
    this.boxElement = document.createElement("div");
    this.boxElement.classList.add(this.classBox);
    BASE_ZONE.appendChild(this.boxElement);

    this.audioElement = document.createElement("audio");
    this.audioElement.loop = true;
    this.boxElement.appendChild(this.audioElement);

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
    this.genre = genre;
    this.audioElement.src = audio;
    // this.audioElement.play();
    this.classGenre = genre.toLowerCase();
    this.boxElement.classList.add(this.classGenre);
    this.boxElement.style.backgroundColor = color;
  }
}

class LatinBox extends Box {
  constructor(color, genre, type, audio) {
    super();
    this.type = type;
    this.audio = audio;
    this.genre = genre;
    this.audioElement.src = audio;
    this.classGenre = genre.toLowerCase();
    this.boxElement.classList.add(this.classGenre);
    this.boxElement.style.backgroundColor = color;
  }
}
