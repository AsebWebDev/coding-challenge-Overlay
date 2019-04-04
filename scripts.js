const mainButton = $("#main-button");
const overlay = $("#overlay");
const XButton = $("#overlay span");

function toggleOverlay () {
  overlay.toggle();
}

mainButton.on( "click", toggleOverlay);
XButton.on("click", toggleOverlay);