function getComputerChoice() {
    let numerical_choice = Math.floor(Math.random() * 2);
    switch (numerical_choice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Scissor';
            break;
        case 2:
            return 'Paper';
            break;
    } 
}

function play_round (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'scissors') {
            return 'You win. Rock beats Scissors'
        }
        if (computerSelection.toLowerCase() == 'rock') {
            return 'Tie';
        }
        if (computerSelection.toLowerCase() == 'paper') {
            return "You lose. Paper beats Rock"
        }
    }
    if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'scissors') {
            return 'You lose. Scissors beats paper'
        }
        if (computerSelection.toLowerCase() == 'rock') {
            return 'You win. Paper beats Rock'
        }
        if (computerSelection.toLowerCase() == 'paper') {
            return 'Tie!'
        }
    }
    if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'scissors') {
            return 'Tie!'
        }
        if (computerSelection.toLowerCase() == 'rock') {
            return 'You lose. Rock beats Scissors'
        }
        if (computerSelection.toLowerCase() == 'paper') {
            return 'You win. Scissors beats paper'
        }
        
    
    }

}