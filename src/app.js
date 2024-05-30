import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard();
  document
    .getElementById("newCardButton")
    .addEventListener("click", generateRandomCard);
  setInterval(generateRandomCard, 10000);

  document
    .getElementById("cardWidth")
    .addEventListener("change", updateCardDimensions);
  document
    .getElementById("cardHeight")
    .addEventListener("change", updateCardDimensions);
  updateCardDimensions();
};

function generateRandomCard() {
  const suits = ["heart", "spade", "club", "diamond"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("card");
  card.className = `card ${randomSuit}`;

  const topLeftSuit = document.querySelector(".top-left .suit");
  const bottomRightSuit = document.querySelector(".bottom-right .suit");
  const valueElement = document.querySelector(".value");

  topLeftSuit.textContent = getSuitSymbol(randomSuit);
  bottomRightSuit.textContent = getSuitSymbol(randomSuit);
  valueElement.textContent = randomValue;
}

function getSuitSymbol(suit) {
  switch (suit) {
    case "heart":
      return "♥";
    case "spade":
      return "♠";
    case "club":
      return "♣";
    case "diamond":
      return "♦";
  }
}

function updateCardDimensions() {
  const card = document.getElementById("card");
  const width = document.getElementById("cardWidth").value;
  const height = document.getElementById("cardHeight").value;
  card.style.width = `${width}px`;
  card.style.height = `${height}px`;
}
