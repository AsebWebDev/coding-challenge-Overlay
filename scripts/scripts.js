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
    case "ib2": infoText.text(infotexts.Promotion); break;
    case "ib3": infoText.text(infotexts.Habilitation); break;
    case "ib4": infoText.text(infotexts.Juniorproffesur); break;
    case "ib5": infoText.text(infotexts.Berufungssverfahren); break;
    case "ib6": infoText.text(infotexts.Arbeitsplatz); break;
    case "ib7": infoText.text(infotexts.FamiliePartnerschaftAlltag); break;
    case "ib8": infoText.text(infotexts.Mobilität); break;
    case "ib9": infoText.text(infotexts.BlickAusDemAusland); break;
    case "ib10": infoText.text(infotexts.Allgemein); break;
    default: console.log("Bitte wählen Sie eine Kategorie oder Textsorte aus."); 
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