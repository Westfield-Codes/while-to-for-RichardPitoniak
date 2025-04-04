/* While Loop Review: Three Guesses */

// Define a variable answer, set equal to a random number between 1 and 10
var answer = Math.floor(Math.random()*10+1)
// Define a variable guess, set equal to 0
var guess = 0 
// Define a variable guessCount, set equal to 0

// Let the user guess WHILE guessCount is less than 4
for (let guessCount = 0; guessCount < 4; guessCount++) {
// Add one to guessCount
// Set guess equal to the user input after "Guess my number"
guess = prompt ("Guess my number")
// If guess is equal to answer, say "Right!" and break the loop
if (guess == answer ) {
    alert ("Right!")
    break
}
// Otherwise say "Wrong!"
else alert ("wrong!")
// End the loop
if (guessCount == 3) alert ("out of guesses, the number was " + answer)
}
