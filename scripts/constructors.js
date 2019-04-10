class Box {
  constructor(color, genre, type, image, audio) {
    this.type = type;
    this.image = image;
    this.audio = audio;
    this.genre = genre;

    this.boxElement = document.createElement("div");
    this.boxElement.classList.add("box");
    this.boxElement.setAttribute("draggable", true);
    BASE_ZONE.appendChild(this.boxElement);

    this.audioElement = document.createElement("audio");
    this.boxElement.appendChild(this.audioElement);

    color
      ? (this.boxElement.style.backgroundColor = color)
      : (this.boxElement.style.backgroundColor = "#e9e9e9");
  }
}

class TechnoBox extends Box {
  constructor(color, genre, type, image, audio) {
    super();
    this.audioElement.src = audio;
    this.classGenre = genre.toLowerCase();
    this.boxElement.classList.add(this.classGenre);
    this.boxElement.style.backgroundColor = color;
    this.boxElement.style.backgroundImage = `url('${image}')`;
  }
}

class LatinoBox extends Box {
  constructor(color, genre, type, image, audio) {
    super();
    this.audioElement.src = audio;
    this.classGenre = genre.toLowerCase();
    this.boxElement.classList.add(this.classGenre);
    this.boxElement.style.backgroundColor = color;
    this.boxElement.style.backgroundImage = `url('${image}')`;
  }
}

class RockBox extends Box {
  constructor(color, genre, type, image, audio) {
    super();
    this.audioElement.src = audio;
    this.classGenre = genre.toLowerCase();
    this.boxElement.classList.add(this.classGenre);
    this.boxElement.style.backgroundColor = color;
    this.boxElement.style.backgroundImage = `url('${image}')`;
  }
}
