//problem: create a program that takes in "rock",
// "paper", or "scissors" from a user, where the computer randomly
// chooses one of the the three, and outputs who won

// 1.0 write logic to get computer choice
// 1.2 randomly return rock, paper, or scissors using Math.random()
// 1.3 test
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

console.log(getComputerChoice())


// 2.0 write logic to get human choice

// 2.1 create function getHumanChoice() {
// 2.2    return one of the three choices from the human using prompt()  
// 2.3 test

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors, bitch?")
    return choice
}

console.log(getHumanChoice())
// 3.0 Declare the players score variables

// 3.1 initialize two GLOBAL variables 
// let humanScore = 0 
// let computerScore = 0

// 4.0 Write logic to play one round 

// 4.1 create function playRound(playRound: humanChoice) {
// }