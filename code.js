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