const mainButton = $("#main-button");
const overlay = $("#overlay");
const XButton = $("#overlay span");
const infoText = $("#info-text")
const infoBoxes = $(".info-box");

function toggleOverlay () {
  overlay.toggle();
}

function showCorrespondingText (e) {
  switch (this.id) {
    case "ib1": infoText.text(infotexts.Karrieweg); break;
    case "ib2": infoText.text("Punkt 2"); break;
    default: console.log("empty"); 
  }
}

function hideCorrespondingText() {
  infoText.text("Bitte wählen Sie eine Kategorie oder Textsorte aus.")
}

// EVENT HANDLER
mainButton.on( "click", toggleOverlay);
XButton.on("click", toggleOverlay);
infoBoxes.mouseenter(showCorrespondingText);
infoBoxes.mouseleave(hideCorrespondingText)