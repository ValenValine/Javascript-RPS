let computerSelections = ["rock", "paper","scissors"];
let countPlayerWin = 0
let countComputerWin = 0



function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
        console.log("Computer score = " + countComputerWin + " Player score = " + countPlayerWin)
    }



function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win. Rock beats scissors.")
        countPlayerWin +=  1;
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose. Paper beats rock.")
        countComputerWin += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win. Scissors beats paper.")
        countPlayerWin += 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose. Rock beats scissors.")
        countComputerWin += 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lose. Scissors beat paper.")
        countComputerWin += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win. Paper beats rock.")
        countPlayerWin += 1;
    } else if (playerSelection == computerSelection){
        console.log("Tie. You and computer made the same choice.")
    } else{
        console.log("Please choose among rock, paper, or scissors only.")
    }
}

}



game()

