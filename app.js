



const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  getGuess() {
    prompt ('Enter a guess between ${smallestNum} and ${biggestNum}')
  },
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}
console.log(game.getGuess())