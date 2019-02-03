/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

  class Phrase {

  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
    const ulOfPhrases = document.querySelector('#phrase ul');
    for(let i=0; i<this.phrase.length; i++) {
      let liPhrase = document.createElement('li');
      liPhrase.textContent = this.phrase[i];
      if (liPhrase.textContent == ' ') {
        liPhrase.className = 'space';
      } else {
        liPhrase.className = 'letter';
      }
      ulOfPhrases.appendChild(liPhrase);
    }
  }

  checkLetter(letter) {
    let letterFound = false;
    const letters = document.querySelectorAll('.letter');
      //if current letter being looped over equals the letter being pressed -> add "show class" to letter
    for(let i=0; i<letters.length; i++) {
      if (letters[i].textContent.toUpperCase() === letter.toUpperCase())  {
        letters[i].className += " show";
        letterFound = true;
      }
    }
      if(letterFound) {
        return letter;
    }
      missed +=1;
      return null;
  }

  showMatchedLetter() {

  }




}
