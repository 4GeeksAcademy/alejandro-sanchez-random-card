/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cards = [
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
const suits = [
  { name: "♠️", icon: "text-dark fs-1" },
  { name: "♥", icon: "text-danger fs-1" },
  { name: "♣", icon: "text-dark fs-1" },
  { name: "♦", icon: "text-danger fs-1" }
];

let getRandomCard = () => {
  let card = cards[Math.floor(Math.random() * cards.length)];
  let cardNumberText = document.querySelector("h1");
  let suit = suits[Math.floor(Math.random() * suits.length)];
  let suitText = document.querySelectorAll("h2");

  cardNumberText.innerHTML = `${card}`;
  cardNumberText.className = `${suit.icon}`;
  suitText.forEach(text => {
    text.innerHTML = `${suit.name}`;
    text.className = `${suit.icon}`;
  });
};

window.onload = getRandomCard();
{
}

const button = document.getElementById("newCard");
button.addEventListener("click", getRandomCard);

const intervalo = setInterval(getRandomCard, 10000);
