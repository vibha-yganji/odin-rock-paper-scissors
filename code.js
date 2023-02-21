function getComputerChoice() {
    let numerical_choice = Math.floor(Math.random() * 2);
    switch (numerical_choice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Scissors';
            break;
        case 2:
            return 'Paper';
            break;
    } 
}

function play_round (playerSelection, computerSelection) {
    let counter;

    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'scissors') {
            counter = 1;
            return 'You win. Rock beats Scissors';
        }
        else if (computerSelection.toLowerCase() == 'rock') {
            return 'Tie';
        }
        else if (computerSelection.toLowerCase() == 'paper') {
            return "You lose. Paper beats Rock";
        }
    }
    if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'scissors') {
            return 'You lose. Scissors beats paper';
        }
        else if (computerSelection.toLowerCase() == 'rock') {
            counter = 1;
            return 'You win. Paper beats Rock';   
        }
        else if (computerSelection.toLowerCase() == 'paper') {
            return 'Tie!';
        }
    }
    if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'scissors') {
            return 'Tie!';
        }
        else if (computerSelection.toLowerCase() == 'rock') {
            return 'You lose. Rock beats Scissors';
        }
        else if (computerSelection.toLowerCase() == 'paper') {
            counter = 1;
            return 'You win. Scissors beats paper';
        }
    }
}
function game () {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose your choice!');
        let computerSelection = getComputerChoice();
        let result = play_round(playerSelection, computerSelection);
        alert(result);
    }
    if (counter > 2) {
        return "You win!";
    }
    else {
        return "Hahaha you lose!";
    }

}