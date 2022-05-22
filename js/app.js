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
  const randomNumber = Math.floor(Math.random() * phrases.length)
  let phrase = arr[randomNumber];
  console.log(phrase);
  return phrase;
};

const randomPhrase = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let letter = arr[i];
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.textContent = letter;
    phrase.appendChild(li);
    if (letter === " ") {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
  }
}

addPhraseToDisplay(randomPhrase);