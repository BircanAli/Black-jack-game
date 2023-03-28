var cards = []; //array - order list of items.

var sum = [];
var hasBlackJack = false;
var isAlive = false;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEL = document.querySelector("#sum-el");
var cardsEl = document.querySelector("#cards-el");
var player = {
  name: "Birdzan",
  chips: 145,
};

var playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  if (isAlive === false || hasBlackJack === true) {
    isAlive = true;
    hasBlackJack = false;
    var firstCard = getRandomCard();
    var secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
  }
}

function getRandomCard() {
  var randomNumber = Math.floor(Math.random() * 13 + 1);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + "  ";
  }

  sumEL.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new cards?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    var thirdCard = getRandomCard();

    sum += thirdCard;
    cards.push(thirdCard);

    renderGame();
  }
}
