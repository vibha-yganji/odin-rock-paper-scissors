function getComputerChoice() {
    let numerical_choice = Math.floor(Math.random() * 2);
    switch (numerical_choice) {
        case 0:
            let choice = 'Rock';
        case 1:
            choice = 'Scissor';
        case 2:
            choice = 'Paper';
    return choice;
    } 
}