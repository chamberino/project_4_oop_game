/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

  constructor(array) {
    this.missed = 0;

    this.arrayLiteral = array;

    this.phrases = this.createPhrases();

    this.activePhrase = null;

  }

  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
  let random = Math.floor(Math.random() * this.phrases.length);
  let randPhrase = this.phrases[random];
  return randPhrase;
  };

  createPhrases() {
	let tempPhrases = [];
  let phrases = [];
	for (let i=0;i<5;) {
    let random = Math.floor(Math.random() * this.arrayLiteral.length);
    let phrase = this.arrayLiteral[random];
    if(tempPhrases.indexOf(phrase)===-1) {
    tempPhrases.push(phrase)
     i++
    }
  }
  for (let j=0;j<tempPhrases.length;j++) {
    phrases.push(new Phrase(tempPhrases[j]))
  }
  return phrases;
  }

  checkForWin() {
    const totalShown = document.querySelectorAll('.show');
    const totalLetters = document.querySelectorAll('.letter');
    const startScreen = document.querySelector('#overlay');
    const h2 = document.querySelector('h2.title');
    if (totalShown.length === totalLetters.length) {
      startScreen.style.display = '';
      startScreen.className = 'win';
      startButton.textContent = 'Play Again';
      h2.textContent = "You Win!"
      this.missed = 0;
      return true;
    } else if (this.missed >= tries.length) {
      startScreen.style.display = '';
      startScreen.className = 'lose';
      startButton.textContent = 'Try Again'
      h2.textContent = "You Lose!"
      this.missed = 0;
      console.log('working')
      return false;
    }
  }

  removeLife(letter) {
      tries[tries.length-1-this.missed].setAttribute('src','images/lostHeart.png');
      this.missed += 1;
  }

  initialize() {
    const chosen = document.querySelectorAll('.chosen');
    // Initalizes attributes and class settings on display banner and qwerty display
    for(let i=0; i<chosen.length; i++) {

      chosen[i].removeAttribute("disabled");
      chosen[i].className = '';
    }
    const letter = document.querySelectorAll('.letter')
    for (let i=0;i<letter.length;i++) {
        letter[i].parentNode.removeChild(letter[i]);
      }
    const space = document.querySelectorAll('.space')
    for (let i=0;i<space.length;i++) {
        space[i].parentNode.removeChild(space[i]);
      }
  // Initializes Hearts
    for(let i=0; i<tries.length; i++){
          tries[i].setAttribute('src','images/liveHeart.png');
        }
  // resets random phrase
    // let resetPhrase = this.getRandomPhrase(phrases);
    // addPhraseToDisplay(resetPhrase);
    this.startGame();
  }

}
