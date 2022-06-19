// Containers
let initiate = document.getElementById("initiate");
let initiateBtnContainer = document.getElementById("initiateBtnContainer");
let teamGeneratorContainer = document.getElementById("teamGeneratorContainer");
let playersContainer = document.getElementById("playersContainer");

// Buttons
let addFieldBtn = document.getElementById("addFieldBtn");

//
let createTeams = document.getElementById("createTeams");
let teamOneContainer = document.getElementById("teamOneContainer");
let teamTwoContainer = document.getElementById("teamTwoContainer");

// teamGeneratorContainer.classList.add("hidden");
initiate.addEventListener("click", () => {
  console.log("click");

  // initiateBtnContainer.classList.add("hidden");
  // teamGeneratorContainer.classList.remove("hidden");
});

addFieldBtn.addEventListener("click", () => {
  let newInput = document.createElement("input");
  newInput.setAttribute("placeholder", "Ange spelarens namn");
  newInput.setAttribute("id", "input");
  playersContainer.append(newInput);
});

createTeams.addEventListener("click", () => {
  let listOfPlayersFromInputs = [];

  let teamOne = [];
  let teamTwo = [];

  teamOneContainer.innerHTML = "";
  teamTwoContainer.innerHTML = "";

  let numberOfInputFields = document.querySelectorAll("input");
  console.log(numberOfInputFields);

  for (let i = 0; i < numberOfInputFields.length; i++) {
    let allPlayers = document.getElementsByTagName("input")[i].value;
    listOfPlayersFromInputs.push(allPlayers);
  }

  listOfPlayersFromInputs.sort(() => Math.random() - 0.5);

  listOfPlayersFromInputs.map((player, index) => {
    if (index % 2 === 0) {
      teamOne.push(player);
    } else {
      teamTwo.push(player);
    }
  });

  teamOneContainer.append(teamOne);
  teamTwoContainer.append(teamTwo);
});
