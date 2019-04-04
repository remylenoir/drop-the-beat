// Mapping of MUSIC (core Object) and storing of the arguments
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

    // Automatic creation of each music element
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

// Refresh the experience
document.querySelectorAll(".box").forEach(box => {
  document.querySelector(".refresh-button").addEventListener("click", evt => {
    BASE_ZONE.appendChild(box);
    box.classList.remove("active");
    soundPlayback();
  });
});

// Browser notice
function myFunction() {
  const NOTICE = `This is a web experiment which only works with Google Chrome, 
  please switch to Google Chrome or download it :).`;

  let noticeMessage = document.createElement("h3");
  let noticeContainer = document.querySelector(".chrome-notice");
  noticeMessage.innerText = NOTICE;
  noticeContainer.appendChild(noticeMessage);

  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
    noticeContainer.style.display = "flex";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    noticeContainer.style.display = "flex";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    noticeContainer.style.display = "flex";
    console.log("nope");
  } else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
    //IF IE > 10
    noticeContainer.style.display = "flex";
  } else {
    noticeContainer.style.display = "flex";
  }
}
myFunction();
