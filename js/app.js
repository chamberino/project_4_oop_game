/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//VARIABLES
const phrasesLiteral = ["Break a leg","When pigs fly","Piece of cake","Blessing in disguise","A dime a dozen","Call it a day", "Trim the fat"]
const qwertyButtons = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key');
const tries = document.querySelectorAll('li.tries img')
const startButton = document.querySelector('#btn__reset');
// let missed = 0;
let game;
let phrase;

//Creates a new instance of the Game Object, and calls the startGame and initialize methods to refresh the
function startGame() {
  game = new Game(phrasesLiteral);
  game.startGame();
  game.initialize()
}

// Hide Start Game Overlay
startButton.addEventListener('click', ()=> {
  startGame();
});

//Event listener is added to on screen keyboard. The button that triggers the event is passed into the handleInteraction method, then the checkForWin method is called.
qwertyButtons.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    let letter = event.target;
    game.handleInteraction(letter);
  }
  game.checkForWin();
});

//Event listener is triggered upon keypress. If the player presses enter during the start or end screen, the game will reinitialize. Otherwise, the key that is pressed will be passed to the handInteraction method.
window.addEventListener('keypress', (e)=> {
  if(document.querySelector('#overlay').style.display === '') {
    if (e.keyCode == '13') {
      startGame();
    }
  }
  game.activePhrase.checkLetter(event.key);
  for(i=0; i<keys.length; i++) {
    if(e.key === keys[i].textContent) {
      let letter = keys[i];
      game.handleInteraction(letter);
    }
  }
  game.checkForWin();
})
