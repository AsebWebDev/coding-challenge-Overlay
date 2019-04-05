const mainButton = $("#main-button");
const overlay = $("#overlay");
const XButton = $("#overlay span");
const infoText = $("#info-text")
const infoBoxes = $(".info-box");

// EVENT HANDLER
mainButton.on( "click", overlay.toggle());             // show Overlay on Click Main-Button
XButton.on("click", overlay.toggle());                 // hide Overlay on Click X-Button
infoBoxes.mouseenter(showCorrespondingText);        // show infotext to each category and select box
infoBoxes.mouseleave(hideCorrespondingText);        // reset text & unselect box on mouseleave

window.addEventListener("keydown", handleKeydown);  // handle all Keydown-Events

// FUNCTIONS

//Show Text corresponding to the selected box (by mouse or keyboard)
//data comes from /data/data.js
function showCorrespondingText (e, id) {
  if (id === undefined) id = Number(this.id); // if no id as argument is given, use the div-id (String -> Number) of current infobox
  unselectAllInfoBoxes();
  $(this).addClass("selected");
  switch (id) {
    case 0: infoText.text(infotexts.Karriewege); break;
    case 1: infoText.text(infotexts.Habilitation); break;
    case 2: infoText.text(infotexts.Promotion); break;
    case 3: infoText.text(infotexts.Juniorproffesur); break;
    case 4: infoText.text(infotexts.Berufungssverfahren); break;
    case 5: infoText.text(infotexts.Arbeitsplatz); break;
    case 6: infoText.text(infotexts.FamiliePartnerschaftAlltag); break;
    case 7: infoText.text(infotexts.Mobilität); break;
    case 8: infoText.text(infotexts.BlickAusDemAusland); break;
    case 9: infoText.text(infotexts.Allgemein); break;
    default: infoText.text(infotexts.DefaultText); // Default Text
  }
}

function hideCorrespondingText() {
  infoText.text(infotexts.DefaultText) // set shown Text back to Default
}

function unselectAllInfoBoxes() {
  $(".info-box").removeClass("selected");
}

function handleKeydown(e) {
  let overlayIsVisible = $("#overlay:visible").length > 0; // check if overlay is visible
  if (overlayIsVisible) {
    if (e.keyCode === 27) overlay.toggle()();      // ESC
    else if (!infoBoxes.hasClass("selected")) { // if no box is selected, select & show the first one by default
      $(infoBoxes[0]).addClass("selected");  
      infoText.text(infotexts.Karrieweg)
    } else {                                    // if a box is selected, select the next/previous box      
      let selectedBoxId = Number($('.selected')[0].id);
      unselectAllInfoBoxes();
      if (e.keyCode === 37) selectedBoxId--;    // LEFT 
      if (e.keyCode === 38) selectedBoxId -= 2; // UP
      if (e.keyCode === 39) selectedBoxId++;    // RIGHT
      if (e.keyCode === 40) selectedBoxId += 2; // DOWN
      if (e.keyCode === 27) overlay.toggle()()     // ESC
      if (selectedBoxId > 9) selectedBoxId = 0;
      if (selectedBoxId < 0) selectedBoxId = 9;
      showCorrespondingText(e, selectedBoxId);
      $($('.info-box')[selectedBoxId]).addClass("selected");
    }
  } else  {
      if (e.keyCode === 13) overlay.toggle()();    // open overlay on ENTER when Overlay it invisible
  }
}

