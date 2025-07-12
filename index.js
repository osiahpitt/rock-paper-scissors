//problem: create a program that takes in "rock",
// "paper", or "scissors" from a user, where the computer randomly
// chooses one of the the three, and outputs who won

// 1.0 write logic to get computer choice
// 1.2 randomly return rock, paper, or scissors using Math.random()
// 1.3 test

// randomly returns 'rock', 'paper', or 'scissors'
function getComputerChoice(number = 3) {
    let a = Math.floor(Math.random() * number)

    if (a === 0) {
        return 'rock'
    }

    if (a === 1) {
        return 'paper'
    }

    if (a === 2) {
        return 'scissors'
    } 

}

// console.log(getComputerChoice())


// 2.0 write logic to get human choice

// 2.1 create function getHumanChoice() {
// 2.2 return users input using prompt()  
// 2.3 test

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors, bitch?")
    return choice
}

console.log(getHumanChoice())


// 3.0 Declare the players score variables to keep track of score

// 3.1 initialize two GLOBAL variables 


// 4.0 Write logic to play one round 

// 4.1 create function
// 4.2 takes human and players choices as arguments
// 4.3 plays a single round
//  4.31 prompt appears, user types in 'rock', 'paper', or 'scissors
// 4.4 increments the round winner's score and logs a winner announcement


function playGame() {
    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log('tie');
        return
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ) {
        console.log('Computer Wins: paper beats rock')
        computerScore++;
        return;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('Human Wins: paper beats rock');
        humanScore++;
        return;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Computer Wins: rock beats scissors');
        computerScore++;
        return;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Human Wins: rock beats scissors');
        humanScore++;
        return;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Computer Wins: scissors beats paper');
        computerScore++;
        return;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('Human Wins: scissors beats paper');
        humanScore++;
        return;
}
}
}

playGame();