console.log("test");

let initiate = document.getElementById("initiate");
let initiateBtnContainer = document.getElementById("initiateBtnContainer");
let addFieldBtn = document.getElementById("addFieldBtn");
let playersContainer = document.getElementById("playersContainer");
let createTeams = document.getElementById("createTeams");
let output = document.getElementById("output");
let teamOneContainer = document.getElementById("teamOneContainer");
let teamTwoContainer = document.getElementById("teamTwoContainer");

initiate.addEventListener("click", () => {
  console.log("click");
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

  let middleIndex = Math.ceil(listOfPlayersFromInputs.length / 2);

  teamOne = listOfPlayersFromInputs.slice().splice(0, middleIndex);
  teamTwo = listOfPlayersFromInputs.slice().splice(-middleIndex);

  teamOneContainer.append(teamOne);
  teamTwoContainer.append(teamTwo);
});
