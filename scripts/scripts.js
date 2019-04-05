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
function showCorrespondingText (e, id) {
  if (id === undefined) id = Number(this.id); // if no id as argument given, use the div-id of current infobox
  unselectAllInfoBoxes();
  $(this).addClass("selected");
  switch (id) {
    case 0: infoText.text(infotexts.Karrieweg); break;
    case 1: infoText.text(infotexts.Habilitation); break;
    case 2: infoText.text(infotexts.Promotion); break;
    case 3: infoText.text(infotexts.Juniorproffesur); break;
    case 4: infoText.text(infotexts.Berufungssverfahren); break;
    case 5: infoText.text(infotexts.Arbeitsplatz); break;
    case 6: infoText.text(infotexts.FamiliePartnerschaftAlltag); break;
    case 7: infoText.text(infotexts.Mobilität); break;
    case 8: infoText.text(infotexts.BlickAusDemAusland); break;
    case 9: infoText.text(infotexts.Allgemein); break;
    default: infoText.text("Bitte wählen Sie eine Kategorie oder Textsorte aus."); // Default Text
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
      let selectedBoxId = Number($('.selected')[0].id);
      unselectAllInfoBoxes();
      if (e.keyCode === 37) selectedBoxId--;    // LEFT 
      if (e.keyCode === 38) selectedBoxId -= 2; // UP
      if (e.keyCode === 39) selectedBoxId++;    // RIGHT
      if (e.keyCode === 40) selectedBoxId += 2; // DOWN
      if (e.keyCode === 27) toggleOverlay()     // ESC
      if (selectedBoxId > 9) selectedBoxId = 0;
      if (selectedBoxId < 0) selectedBoxId = 9;
			console.log("TCL: handleKeydown -> selectedBoxId AFTER", selectedBoxId)
      showCorrespondingText(e, selectedBoxId);
      $($('.info-box')[selectedBoxId]).addClass("selected");
    }
  } else  {
    if (e.keyCode === 13) toggleOverlay(); // open overlay on ENTER when Overlay it invisible
  }
}

