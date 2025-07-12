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


function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors, bitch?")
    return choice; 
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log('tie');
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ) {
        console.log('Computer Wins: paper beats rock')
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('Human Wins: paper beats rock');
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Computer Wins: rock beats scissors');
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Human Wins: rock beats scissors');
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Computer Wins: scissors beats paper');
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('Human Wins: scissors beats paper');
        humanScore++;
}
}

function playGame() {
    for (let i = 0; i < 5; i++) {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        alert('HUMAN WINS, AGI IS NEVER COMING');
    } else if (humanScore < computerScore) {
        alert('COMPUTER WINS, GIVE UP NOW'); 
    } else {
        alert("TIE - YOU'RE BOTH MEDIOCRITIES")
    }
}

playGame()