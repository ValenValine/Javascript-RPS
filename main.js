let computerSelections = ["rock", "paper","scissors"];
let computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win. Rock beats scissors."
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose. Paper beats rock."
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win. Scissors beats paper."
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose. Rock beats scissors."
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose. Scissors beat paper."
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win. Paper beats rock."
    } else if (playerSelection == computerSelection){
        return "Tie. You and computer made the same choice."
    } else{
        return "Please choose among rock, paper, or scissors only."
    }
}

const playerSelection = prompt("Rock, paper, or scissors?");
console.log(computerSelection)
console.log(playRound(playerSelection.toLowerCase(), computerSelection))

