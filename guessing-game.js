function guessingGame() {
   const randNum = Math.floor(Math.random() * 100);
   let isOver = false;
   let guessCount = 0;
   return function playerGuess(guess) {
      if (isOver) return "The game is over, you already won!";
      guessCount++;
      if (guess === randNum) {
         isOver = true;
         return `You win! You found ${randNum} in ${guessCount} ${guessCount === 1 ? "guess" : "guesses"}.`;
      } else if (guess < randNum) {
         return `${guess} is too low!`
      } else if (guess > randNum) {
         return `${guess} is too high!`
      }
   }
}

module.exports = { guessingGame };
