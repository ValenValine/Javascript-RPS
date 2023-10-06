let computerSelections = ["rock", "paper","scissors"];
let countPlayerWin = 0
let countComputerWin = 0

function playRound(playerSelection, computerSelection){
    computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
    const buttonRock = document.querySelector('#buttonRock');
    buttonRock.addEventListener('click', () => {
    playRound("rock", computerSelection)
    })

    const buttonPaper = document.querySelector('#buttonPaper');
    buttonPaper.addEventListener('click', () => {
    playRound("paper", computerSelection)
    });

    const buttonScissors = document.querySelector('#buttonScissors');
    buttonScissors.addEventListener('click', () => {
    playRound("scissors", computerSelection)
    })
    
    
function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "scissors"){
        results.innerHTML = "You win. Rock beats scissors.";
        countPlayerWin +=  1;
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        results.innerHTML = "You lose. Paper beats rock.";
        countComputerWin += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        results.innerHTML = "You win. Scissors beat paper.";
        countPlayerWin += 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        results.innerHTML = "You lose. Rock beats scissors.";
        countComputerWin += 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        results.innerHTML = "You lose. Scissors beat paper.";
        countComputerWin += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        results.innerHTML = "You win. Paper beats rock.";
        countPlayerWin += 1;
    } else if (playerSelection == computerSelection){
        results.innerHTML = "Tie. You and computer made the same choice."
    }
    const points = document.querySelector('#points')
    pointsComputer.textContent = "Computer score = " + countComputerWin
    pointsPlayer.textContent = "  Player score = " + countPlayerWin;
    
    if (countPlayerWin == 5){
        winorlose.innerHTML = "Game over. You win!"
        buttonPaper.setAttribute("disabled", 1)
        buttonRock.setAttribute("disabled", 1)
        buttonScissors.setAttribute("disabled", 1)

    } else if (countComputerWin == 5){
        winorlose.innerHTML = "You lose. Good game." 
        buttonPaper.setAttribute("disabled", 1)
        buttonRock.setAttribute("disabled", 1)
        buttonScissors.setAttribute("disabled", 1)
    } 
    };
}

playRound()


