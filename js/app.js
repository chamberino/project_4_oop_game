/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//VARIABLES
const phrasesLiteral = ["Break a leg","When pigs fly","Piece of cake","Blessing in disguise","A dime a dozen","Call it a day", "Trim the fat"]
let phrase;
const qwertyButtons = document.querySelector('#qwerty');
const tries = document.querySelectorAll('li.tries img')
const startButton = document.querySelector('#btn__reset');
let missed = 0;

let game;
// Hide Start Game Overlay
startButton.addEventListener('click', ()=> {
  game = new Game(phrasesLiteral);
  game.startGame();
  game.initialize()
  console.log(game)
  qwertyButtons.addEventListener('click', (event) => {
    game.activePhrase.checkLetter(event.target.textContent);
    // console.log(game.activePhrase.checkLetter(event.target.textContent));
  });
});

qwertyButtons.addEventListener('click', (event) => {

   if (event.target.tagName == 'BUTTON') {
     event.target.className = "chosen";
     event.target.setAttribute('disabled', true);
     let userAttempt = game.activePhrase.checkLetter(event.target.textContent);
     if (userAttempt === null){
       game.removeLife()
     }
     else if (userAttempt != null) {
       console.log('match!');
     }
   }
   game.checkForWin();
 });






 // const phrase = new Phrase('Life is like a box of chocolates');
 // console.log(`Phrase - phrase: ${phrase.phrase}`);
