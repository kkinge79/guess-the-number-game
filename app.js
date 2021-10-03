






const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        do{
          getGuess = getGuess + 1
          }
        while (currentGuess != this.secretNum);
      },

  getGuess() {
    let currentGuess = parseInt( prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`), )
    
    while (currentGuess > this.biggestNum || currentGuess < this.smallestNum || isNaN(currentGuess)) {
      currentGuess = parseInt ( prompt (`you need to return a number between ${this.smallestNum} and ${this.biggestNum} :). Nice try`))
    }
    console.log(typeof currentGuess)
  }

}

game.getGuess()