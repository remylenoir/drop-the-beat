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
  }
  // audioPlay() {
  //   console.log("Play", this.type);
  // }
  // audioStop() {
  //   console.log("Play", this.type);
  // }
}

class LatinBox extends Box {
  constructor(color, genre, type, audio) {
    super();
    this.type = type;
    this.audio = audio;
    this.genre = genre;
    this.classGenre = genre.toLowerCase();
    this.boxElement.classList.add(this.classGenre);
    this.boxElement.style.backgroundColor = color;
  }
}
