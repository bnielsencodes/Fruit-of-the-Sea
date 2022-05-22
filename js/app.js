// GLOBAL VARIABLES
const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const startButton = document.querySelector(".btn-reset");
const overlay = document.querySelector(".start");
const winText = document.querySelector('.title');
const ul = document.querySelector('ul');
let missed = 0;

// PHRASES ARRAY
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

// HIDE OVERLAY EVENT LISTENER
startButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

// GET RANDOM PHRASE FUNCTION
function getRandomPhraseAsArray(arr) {
  const randomNumber = Math.floor(Math.random() * phrases.length)
  let phrase = arr[randomNumber];
  console.log(phrase);
  return phrase;
};

// CALL RANDOM PHRASE
const randomPhrase = getRandomPhraseAsArray(phrases);

// ADD PHRASE TO DISPLAY FUNCTION - INSERT DISPLAYED PHRASE LIST ELEMENTS AND ADD LETTERS OF PHRASE
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

// CALL ADD PHRASE TO DISPLAY
addPhraseToDisplay(randomPhrase);

// ARRAY LETTERS VARIABLE
const arrayLetters = document.querySelectorAll('.letter')

// CHECK LETTER FUNCTION
function checkLetter(arr) {
  let match = null;
  for (let i = 0; i < arrayLetters.length; i += 1) {
    const li = arrayLetters[i];
    if (li.textContent === arr.textContent) {
      li.classList.add('show');
      li.style.transition = "all .5s ease";
      match = arr.textContent;
    }
  }
  return match;
};



// KEYBOARD EVENT LISTENER - 
qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.className != 'chosen') {
    const button = e.target;
    button.className = 'chosen';
    button.setAttribute("disabled", "");
    const foundLetter = checkLetter(button);
    if (foundLetter === null) {
      const heart = document.querySelectorAll('img');
      heart[missed].setAttribute('src', 'images/lostHeart.png');
      missed++;
    }
  }
  checkWin();
});

// RELOAD GAME FUNCTION
function reloadGame() {
  startButton.addEventListener('click', (e) => {
    ul.style.display = 'none';
    location.reload();
  });
}

function checkWin() {
  const show = document.querySelectorAll('.show');
  const letter = document.querySelectorAll('.letter');
  if (letter.length === show.length) {
    overlay.style.display = 'flex';
    overlay.className = 'win';
    winText.textContent = 'You Win!';
    startButton.textContent = 'Replay';
  } else if (missed > 4) {
    overlay.style.display = 'flex';
    overlay.className = 'lose';
    winText.textContent = 'You Lose!';
    startButton.textContent = 'Replay';
  }
  reloadGame();
}