// 2.create a game where you start with random game Node. Ask the user to keep guessing the game no until user enters correct value

let gameNum=25;

let userGame=prompt("Guess the number");
// console.log(userGame);
while(userGame != gameNum)
    {
        userGame=  prompt("you entered wrong no,Guess the number again:");
    }
console.log("congatualtions, you have  entered right number");
