// Properties & functions of the drop-zone
interact(".drop-zone").dropzone({
  accept: ".box",
  ondrop: function(event) {
    console.log("Dropped in!");
  },
  ondragleave: function(event) {
    console.log("Dropped out!");
  }
});

// Defining the borders
let gridTarget = interact.createSnapGrid({
  x: 70,
  y: 70,
  range: 5,
  offset: { x: 5, y: 10 }
});

// Properties and function of the dragged elements
interact(".box").draggable({
  inertia: true,
  max: Infinity,
  snap: { targets: [gridTarget] },
  onmove: dragMoveListener
});

// Function to translate the object
function dragMoveListener(event) {
  let target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  (x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx),
    (y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy);

  // translate the element
  target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}
