const mainButton = $("#main-button");
const overlay = $("#overlay");
const XButton = $("#overlay span");
const infoText = $("#info-text")
const infoBoxes = $(".info-box");

// EVENT HANDLER
mainButton.on( "click", toggleOverlay);             // show Overlay on Click Main-Button
XButton.on("click", toggleOverlay);                 // hide Overlay on Click X-Button
infoBoxes.mouseenter(showCorrespondingText);        // show infotext to each category and select box
infoBoxes.mouseleave(hideCorrespondingText);        // reset text & unselect box on mouseleave

window.addEventListener("keydown", handleKeydown);  // handle all Keydown-Events

// FUNCTIONS

function toggleOverlay () {
  overlay.toggle();
}

//data comes from /data/data.js
function showCorrespondingText (e) {
  unselectAllInfoBoxes();
  $(this).addClass("selected");
  switch (this.id) {
    case "1": infoText.text(infotexts.Karrieweg); break;
    case "2": infoText.text(infotexts.Promotion); break;
    case "3": infoText.text(infotexts.Habilitation); break;
    case "4": infoText.text(infotexts.Juniorproffesur); break;
    case "5": infoText.text(infotexts.Berufungssverfahren); break;
    case "6": infoText.text(infotexts.Arbeitsplatz); break;
    case "7": infoText.text(infotexts.FamiliePartnerschaftAlltag); break;
    case "8": infoText.text(infotexts.Mobilität); break;
    case "9": infoText.text(infotexts.BlickAusDemAusland); break;
    case "10": infoText.text(infotexts.Allgemein); break;
    default: console.log("Bitte wählen Sie eine Kategorie oder Textsorte aus."); // Default Text
  }
}

function hideCorrespondingText() {
  infoText.text("Bitte wählen Sie eine Kategorie oder Textsorte aus.") // Default Text
}

function unselectAllInfoBoxes() {
  $(".info-box").removeClass("selected");
}

function handleKeydown(e) {
  let overlayIsVisible = $("#overlay:visible").length > 0; // check if overlay is visible
  if (overlayIsVisible) {
    // if no box is selected, select the first one by default
    if (!infoBoxes.hasClass("selected")) $(infoBoxes[0]).addClass("selected");  
    // if a box is selected, select the next/previous box
    else {
      let selectedBoxId = $('.selected')[0].id;
      unselectAllInfoBoxes();
      if (e.keyCode === 37 || e.keyCode === 38) selectedBoxId--; // LEFT || UP
      else if (e.keyCode === 39 || e.keyCode === 40) selectedBoxId++; // RIGHT // DOWN
      else if (e.keyCode === 27) toggleOverlay()
      if (selectedBoxId > 9) selectedBoxId = 0;
      if (selectedBoxId < 0) selectedBoxId = 9;
      $($('.info-box')[selectedBoxId]).addClass("selected");
    }
  } else  {
    if (e.keyCode === 13) toggleOverlay(); // open overlay on Enter when Overlay it invisible
  }
}

