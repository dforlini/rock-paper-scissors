let playerChoice;
let computerChoice;

function playGame(choice) {
    playerChoice = choice;
    const choices = ['rock', 'paper', 'scissors'];
     computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';


    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result= 'You win!';
    } else {
        result = 'Computer wins!';
    }



    document.getElementById('result').innerHTML = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
}
