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
// prompts user for r, p, or s and returns the answer
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors, bitch?")
    return choice; 
}
// globally declares variable to use for scoring
let humanScore = 0;
let computerScore = 0;
// evaluates input and logs results; also updates score
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log('TIE');
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ) {
        console.log('COMPUTER WINS: paper beats rock')
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('HUMAN WINS: paper beats rock');
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('COMPUTER WINS: rock beats scissors');
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('HUMAN WINS: rock beats scissors');
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('COMPUTER WINS: scissors beats paper');
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('HUMAN WINS: scissors beats paper');
        humanScore++;
}
}
// loops through 5 times; passes answers to playRound(); logs and alerts score and messages
function playGame() {
    for (let i = 0; i < 5; i++) {

        let humanChoice = getHumanChoice();
        humanChoice = humanChoice.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Human: ${humanScore} - Computer: ${computerScore}`)
    }

    if (humanScore > computerScore) {
        alert(`HUMAN WINS, AGI IS NEVER COMING\n ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`COMPUTER WINS, GIVE UP NOW\n ${computerScore} - ${humanScore}`); 
    } else {
        alert(`TIE - YOU'RE BOTH MEDIOCRITIES\n ${humanScore} - ${computerScore}`)
    }
}

playGame()

// this program isn't nearly as complicated as it may look as a beginner.
// OdinProject makes the directions more complex than they need to be.
// there are only 4 functions, 2 global variables and a single function call.
// getComputerChoice() generates 'rock', 'paper', or 'scissors' at random.
// getHumanChoice() prompts the user to enter 'rock', 'paper' or 'scissors'.
// playRound() is just a few conditionals to console log the results and keep score.
// playGame() loops through 5 times, in that loop we make two variables which essentially
// become the inputs from the human and computer and they get passed to playRound(). The rest
// is just bells and whistles, alerting the user of the outcome and final score

// checking out other people's code is beneficial, but don't mindlessly copy it, understand it,
// rewrite it, disagree with it, take useful things, create the best program you can, and again,
// UNDERSTAND IT INSIDE AND OUT. Simplicity, simplicity, simplicity!

// playRound() can be simplified but I'm not that familiar with && ad || so I used what I knew
// but will obviously learn how to properly use them in the future