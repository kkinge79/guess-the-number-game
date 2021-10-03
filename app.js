






const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
//state of the game 
//placeholders but the values will change as the code and game progress


  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//pre-generated code that produces the "random" number assaigned to the secret number

         do{
           this.prevGuesses.push(this.getGuess())
           } while ( this.prevGuesses[this.prevGuesses.length - 1] != this.secretNum);
           //console.log(this.prevGuesses)
      },
//do while loop that says 'while' the last prev guess doesnt equal the secret number then 'do' - that getguess pushes the wrong answers into the prevGuesses array
//line 21 prevGuesses-1 is stating that the last result of the prev guesses doesnt equal secret number then execute THIS
//do while loop has the user keep guessing till they guess the correct number
//console.logging just shows the array of numbers in the console

  getGuess() {
    let currentGuess = parseInt( prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}, Wrong answers: ${this.prevGuesses}`), )
//method where everything is taking place, after the block of code executes itll display in the RENDER method
//when the initial window prompts the window will display this text. the user writes thier current guess in the box
//still have questions on parseInt
//cant use current guess anywhere else because it only lives in the getGuess universe


    

    while (currentGuess > this.biggestNum || currentGuess < this.smallestNum || isNaN(currentGuess)) {
      currentGuess = parseInt ( prompt (`you need to return a number between ${this.smallestNum} and ${this.biggestNum} :). Nice try`))
//the while loop basically is saying when the users current guess is bigger than 100 or less than 100 or doesnt equal a number then the window will prompt "hey that doesnt follow the rules choose a number between 1 and 100"
    //because of the do while loop above, the window will still appear because it technically is a wrong answer and will keep having the user guess till the users guess= the secret number
//
    }
    return currentGuess
  },

//add render method here
//Render is very similiar to a result
    //once the methods above play out we will display text on the screen depending what happens
      //ex. 'YOUVE GUESSED CORRECT'/ or 'try again, these were your previous guesses
//*need to move the 'wrong answers ${this.prevGuesses} on line 33 possibly to the render

}

game.play()