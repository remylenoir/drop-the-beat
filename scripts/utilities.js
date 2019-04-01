function addClass(element, className) {
  if (element.classList) {
    return element.classList.add(className);
  } else {
    element.className += " " + className;
  }
}

function removeClass(element, className) {
  if (element.classList) {
    return element.classList.remove(className);
  } else {
    element.className = element.className.replace(new RegExp(className + " *", "g"), "");
  }
}
