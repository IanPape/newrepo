
const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let clickDisabled = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}


function handleCardClick(event) {
  let currentCard = event.target;

  if (clickDisabled || currentCard.classList.contains("flipped")) return;

  currentCard.style.backgroundColor = currentCard.classList[0];
  currentCard.classList.add("flipped");

  if (card1 === null) {
    card1 = currentCard;
  } else if (card2 === null) {
    card2 = currentCard;
  }

  if (card1 && card2) {
    clickDisabled = true;

    let color1 = card1.className;
    let color2 = card2.className;

    if (color1 === color2) {
      cardsFlipped += 2;
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      clickDisabled = false; 
    } else {
      setTimeout(function () {
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        clickDisabled = false; 
      }, 1000);
    }
  }

  if (cardsFlipped === COLORS.length) {
    alert("CONGRATULATIONS , YOU'VE DONE IT!");
  }
}

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

createDivsForColors(COLORS);
