# Guess the Number

A simple JavaScript game where the user has to guess the correct number.

## How to Play

1. The game starts with a random number.
2. The user is prompted to guess the number.
3. If the guess is incorrect, the user is prompted to try again.
4. The game continues until the user guesses the correct number.

## Example Code

```javascript
let gameNum = 25;

let userGame = prompt("Guess the number");
while (userGame != gameNum) {
    userGame = prompt("You entered the wrong number, guess again:");
}
console.log("Congratulations, you have entered the right number!");
