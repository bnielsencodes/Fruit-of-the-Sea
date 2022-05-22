const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const startButton = document.querySelector(".btn-reset");
const overlay = document.querySelector(".start");
let missed = 0;

const phrases = [
  "shrimp kabobs",
  "shrimp creole",
  "shrimp gumbo",
  "pan fried",
  "deep fried",
  "stir fried",
  "pineapple shrimp",
  "lemon shrimp",
  "coconut shrimp",
  "pepper shrimp",
  "shrimp soup",
  "shrimp stew",
  "shrimp salad",
  "shrimp and potatoes",
  "shrimp burger",
  "shrimp sandwich",
];

startButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {

};