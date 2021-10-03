






const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
//state of the game 
// values will change as the code and game progress




  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//pre-generated code that produces the "random" number assaigned to the secret number



         do{
           this.prevGuesses.push(this.getGuess())
           this.render()
           } while ( this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
           //console.log(this.prevGuesses)
      },
//the do will run once without the while condition even starting
// the do is only pushing the users guess into the prevGuess array, thats it, but everytime the condition is true the do statement will happen
// while is saying if the last guess the user guess isnt the secret number, activate the DO
//the -1 pulls the last item in an array
//console.logging just shows the array of numbers in the console



  getGuess() {
    let currentGuess = parseInt( prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`), )
//method where everything is taking place, after the block of code executes itll display in the RENDER method
//this is where the current guess takes place, this is where the user will input their answer
//when the initial window prompts the window will display this text. the user writes their current guess in the box
//still have questions on parseInt
//cant use current guess anywhere else because it only lives in the getGuess universe


    

    while (currentGuess > this.biggestNum || currentGuess < this.smallestNum || isNaN(currentGuess)) {
      currentGuess = parseInt ( prompt (`you need to return a number between ${this.smallestNum} and ${this.biggestNum} :). Nice try`), )
//the while loop basically is saying when the users current guess is bigger than 100 or less than 1 or doesnt equal a number then the window will prompt "hey that doesnt follow the rules choose a number between 1 and 100"
    //because of the do while loop above, the window will still appear because it technically is a wrong answer and will keep having the user guess till the users guess= the secret number
//while loop will execute everytime the condition is true, when the condition is true, the statement will occur
    }
    return currentGuess
    //returns the value of the current guess
    //invoke
  },
 render() {
  if( this.prevGuesses[this.prevGuesses.length - 1] === parseInt (this.secretNum)){
  alert (`Congrats you got it! it only took you ${this.prevGuesses.length} guesses`)
  } else {
      if(this.prevGuesses[this.prevGuesses.length - 1] > parseInt (this.secretNum)) {
        alert (`your guess is too High. Previous guesses: ${this.prevGuesses.join()}`) 
      } if(this.prevGuesses[this.prevGuesses.length - 1] < parseInt (this.secretNum)) {
        alert (`your guess is to low. Previous guesses: ${this.prevGuesses.join()}`)
      } else {
        alert ('idk what happened dude, try again')
      }
      }

  }
//add render method here
//Render is very similiar to a result
    //once the methods above play out we will display text on the screen depending what happens
      //ex. 'YOUVE GUESSED CORRECT'/ or 'try again, these were your previous guesses
//*need to move the 'wrong answers ${this.prevGuesses} on line 33 possibly to the render
      }
    

game.play()