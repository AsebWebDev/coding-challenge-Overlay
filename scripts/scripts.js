const mainButton = $("#main-button");
const overlay = $("#overlay");
const XButton = $("#overlay span");
const infoText = $("#info-text")
const infoBoxes = $(".info-box");

function toggleOverlay () {
  overlay.toggle();
}

//data comes from /data/data.js
function showCorrespondingText (e) {
  switch (this.id) {
    case "ib1": infoText.text(infotexts.Karrieweg); break;
    case "ib2": infoText.text(infotexts.Promotion); break;
    case "ib3": infoText.text(infotexts.Habilitation); break;
    case "ib4": infoText.text(infotexts.Juniorproffesur); break;
    case "ib5": infoText.text(infotexts.Berufungssverfahren); break;
    case "ib6": infoText.text(infotexts.Arbeitsplatz); break;
    case "ib7": infoText.text(infotexts.FamiliePartnerschaftAlltag); break;
    case "ib8": infoText.text(infotexts.Mobilität); break;
    case "ib9": infoText.text(infotexts.BlickAusDemAusland); break;
    case "ib10": infoText.text(infotexts.Allgemein); break;
    default: console.log("Bitte wählen Sie eine Kategorie oder Textsorte aus."); // Default Text
  }
}

function hideCorrespondingText() {
  infoText.text("Bitte wählen Sie eine Kategorie oder Textsorte aus.") // Default Text
}

function handleKeydown(e) {
  let overlayIsVisible = $("#overlay:visible").length > 0; // check if overlay is visible
  if (overlayIsVisible) {
    switch (e.keyCode) {
      case 37: console.log("left arrow"); break;
      case 38: console.log("up arrow"); break;
      case 39: console.log("right arrow"); break;
      case 40: console.log("down arrow"); break;
      case 13: console.log("enter"); break;
    }
  }
}

// EVENT HANDLER
mainButton.on( "click", toggleOverlay);
XButton.on("click", toggleOverlay);
infoBoxes.mouseenter(showCorrespondingText);
infoBoxes.mouseleave(hideCorrespondingText)

window.addEventListener("keydown", handleKeydown)