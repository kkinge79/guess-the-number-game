






const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,

  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum


         do{
           this.prevGuesses.push(this.getGuess())
           } while ( this.prevGuesses[this.prevGuesses.length - 1] != this.secretNum);
      },

  getGuess() {
    let currentGuess = parseInt( prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}, Wrong answers: ${this.prevGuesses}`), )
    
    while (currentGuess > this.biggestNum || currentGuess < this.smallestNum || isNaN(currentGuess)) {
      currentGuess = parseInt ( prompt (`you need to return a number between ${this.smallestNum} and ${this.biggestNum} :). Nice try`))
    }
    return currentGuess
  }

}

game.play()