// Containers
let initiateBtnContainer = document.getElementById("initiateBtnContainer");
let teamGeneratorContainer = document.getElementById("teamGeneratorContainer");
let playersContainer = document.getElementById("playersContainer");

// Buttons
let addFieldBtn = document.getElementById("addFieldBtn");

//
let createTeamsBtn = document.getElementById("createTeamsBtn");
let teamOneContainer = document.getElementById("teamOneContainer");
let teamTwoContainer = document.getElementById("teamTwoContainer");

addFieldBtn.addEventListener("click", () => {
  let newInput = document.createElement("input");
  newInput.setAttribute("placeholder", "Ange spelarens namn");
  newInput.setAttribute("id", "input");
  playersContainer.append(newInput);
});

createTeamsBtn.addEventListener("click", () => {
  let listOfPlayersFromInputs = [];

  let teamOne = [];
  let teamTwo = [];

  teamOneContainer.innerHTML = "";
  teamTwoContainer.innerHTML = "";

  let numberOfInputFields = document.querySelectorAll("input");
  console.log(numberOfInputFields);

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
  console.log("after randomizer", listOfPlayersFromInputs);

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
