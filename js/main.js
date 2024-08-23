const buttons = document.querySelectorAll('button');
let humanScore = 0;
let computerScore = 0;
const div = document.querySelector('div');
const para = document.createElement('p');


buttons.forEach(button => button.addEventListener("click", playRound));

function getComputerChoice() {

    let result = Math.floor((Math.random() * 10) + 1);
    if (result < 4) {
        return "Rock";
    } else if (3 < result && result < 7) {
        return "Paper";
    } else if (7 <= result && result <= 10) {
        return "Scissors";
    }
}


function playRound(e) {
    let computerChoice = getComputerChoice();
    let humanChoice = e.target.value;

    para.textContent = ""; // to clear the screen

    if (humanChoice === computerChoice) {

        para.appendChild(document.createTextNode(`You V/S Computer ${humanChoice} VS ${computerChoice}It's a tie. Current Score is Computer Score: ${computerScore} Your Score: ${humanScore}`));


    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {
        ++humanScore;
        para.appendChild(document.createTextNode(`You V/S Computer ${humanChoice} VS ${computerChoice} You win. Current Score is:\nComputer Score: ${computerScore} Your Score: ${humanScore}`));


    } else {
        ++computerScore;
        para.appendChild(document.createTextNode(`You V/S Computer ${humanChoice} VS ${computerChoice} Computer Wins.\nCurrent Score is: Computer Score: ${computerScore} Your Score: ${humanScore}`));

    }
    div.appendChild(para);
    if (computerScore === 5 || humanScore === 5) {

        showWinner();
    }

}
function resetScores() {
    humanScore = 0;
    computerScore = 0;
}
function showWinner() {

    para.textContent = "";// to clear the screen

    if (humanScore === computerScore) {

        para.appendChild(document.createTextNode("It's a Tie"));
    } else if (humanScore >= computerScore) {

        para.appendChild(document.createTextNode("You Won The Series!!!!"));
    } else {
        para.appendChild(document.createTextNode("You Lost! Computer Won The Series!"));

    }
    resetScores();

}


