let initiateBtnContainer = document.getElementById("initiateBtnContainer");
let teamGeneratorContainer = document.getElementById("teamGeneratorContainer");
let playersContainer = document.getElementById("playersContainer");

let addFieldBtn = document.getElementById("addFieldBtn");

let createTeamsBtn = document.getElementById("createTeamsBtn");
let teamsContainer = document.getElementById("teamsContainer");
let teamHeading1 = document.getElementById("teamHeading1");
let teamHeading2 = document.getElementById("teamHeading2");
let teamOneContainer = document.getElementById("teamOneContainer");
let teamTwoContainer = document.getElementById("teamTwoContainer");

let removeAllInfoContainer = document.getElementById("removeAllInfoContainer");
let removeAllInfoBtn = document.getElementById("removeAllInfoBtn");

addFieldBtn.addEventListener("click", () => {
  let newInput = document.createElement("input");
  newInput.setAttribute("placeholder", "Ange spelarens namn");
  newInput.setAttribute("id", "input");
  playersContainer.append(newInput);
});

createTeamsBtn.addEventListener("click", () => {
  removeAllInfoContainer.classList.remove("hidden");
  teamHeading1.classList.remove("hidden");
  teamHeading2.classList.remove("hidden");
  let listOfPlayersFromInputs = [];

  let teamOne = [];
  let teamTwo = [];

  teamOneContainer.innerHTML = "";
  teamTwoContainer.innerHTML = "";

  let numberOfInputFields = document.querySelectorAll("input");

  for (let i = 0; i < numberOfInputFields.length; i++) {
    let allPlayers = document.getElementsByTagName("input")[i].value;
    if (allPlayers !== "") {
      listOfPlayersFromInputs.push(allPlayers);
    }
  }
  console.log("before randomizer", listOfPlayersFromInputs);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  shuffle(listOfPlayersFromInputs);

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

window.addEventListener("load", () => {
  console.log("load");

  removeAllInfoContainer.classList.add("hidden");

  teamHeading1.classList.add("hidden");
  teamHeading2.classList.add("hidden");
});

removeAllInfoBtn.addEventListener("click", () => {
  location.reload();
});
