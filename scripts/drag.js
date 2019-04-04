let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {}, false);

document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    // reset the transparency
    let activeBoxArr = [];
    event.target.style.opacity = "";
    if (
      event.target.parentNode.className == "drop-zone" &&
      !event.target.classList.value.includes("active")
    ) {
      event.target.classList.add("active");
      soundPlayback();
    } else if (event.target.parentNode.className != "drop-zone") {
      event.target.classList.remove("active");
      soundPlayback();
    }
    document.querySelectorAll(".box").forEach(box => {
      let activeBox = box.classList.value.includes("active");

      activeBoxArr.push(activeBox);
    });
    if (!activeBoxArr.includes(true)) {
      lightText.innerText = "Lights on";
      CONTAINER.classList.remove("active");
    }
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "drop-zone") {
      event.target.style.background = "purple";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "drop-zone") {
      event.target.style.background = "";
    }
  },
  false
);

// Dropping elements in the Drop-Zone
document.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "drop-zone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
    if (event.target.className != "drop-zone") {
      dragged.parentNode.removeChild(dragged);
      BASE_ZONE.appendChild(dragged);
    }
  },
  false
);
