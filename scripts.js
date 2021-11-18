// Write your JavaScript code here.
// Remember to pay attention to page loading!

// Use the window load event to ensure all elements have loaded before attaching event handlers.
window.addEventListener("load", () => {
  const takeOffButton = document.getElementById("takeoff");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleFlightScreen = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  const landButton = document.getElementById("landing");
  const abortButton = document.getElementById("missionAbort");

  //When the "Take off" button is clicked, the following should happen:
  // a. window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
  // b. The flight status should change to "Shuttle in flight."
  // c. The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
  // d. The shuttle height should increase by 10,000 miles.

  takeOffButton.addEventListener("click", () => {
    let isReadyForTakeOff = confirm(
      "Please confirm shuttle is ready for take off"
    );
    if (isReadyForTakeOff === true) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleFlightScreen.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = "10,000";
    }
  });

  //When the "Land" button is clicked, the following should happen:
  // a. A window alert should let the user know "The shuttle is landing. Landing gear engaged."
  // b. The flight status should change to "The shuttle has landed."
  // c. The background color of the shuttle flight screen should change from blue to green.
  // d. The shuttle height should go down to 0.

  landButton.addEventListener("click", () => {
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed";
    shuttleFlightScreen.style.backgroundColor = "green";
    shuttleHeight.innerHTML = "0";
  });

  //When the "Abort Mission" button is clicked, the following should happen:
  // a. A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
  // b. The flight status should change to "Mission aborted."
  // c. The background color of the shuttle flight screen should change from blue to green.
  // d. The shuttle height should go to 0.

  abortButton.addEventListener("click", () => {
    let confirmAbort = confirm("Confirm that you want to abort the mission.");
    if (confirmAbort === true) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleFlightScreen.style.backgroundColor = "green";
      shuttleHeight.innerHTML = "0";
    }
  });

  //When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
  // a. The rocket image should move 10 px in the direction of the button that was clicked.
  // b. If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
});
