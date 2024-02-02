let userScore = document.getElementById('userScore');
let computerScore = document.getElementById('computerScore');
let theModal = document.getElementsByClassName('modal')[0];
let userChoice = document.getElementById('userChoice');
let computerChoice = document.getElementById('computerChoice')

document.getElementById('rockIcon').addEventListener('click',() => userTurn('rock'));
document.getElementById('paperIcon').addEventListener('click',() => userTurn('paper'));
document.getElementById('scissorsIcon').addEventListener('click',() => userTurn('scissors'));
document.getElementsByClassName('btn-primary')[0].addEventListener('click', () => resetGame());
document.getElementsByClassName('btn-secondary')[0].addEventListener('click', () => closeModal());
document.getElementsByClassName('btn-close')[0].addEventListener('click', () => closeModal());

function userTurn(choice) {
    let computer = computerTurn();
    console.log(`You chose ${choice}. Computer chose ${computer}.`)
    document.getElementsByClassName('choices')[0].style.display='flex';
    fillResult(choice, computer);
    if (document.getElementsByClassName('results')[0].style.display = 'none') {
        document.getElementsByClassName('results')[0].style.display = 'flex';
    }
    let result = turnResult(choice, computer);
    if (result === 'win') {
        let userScoreVal = Number(userScore.innerText);
        document.getElementsByClassName('scores')[0].style.display = 'flex';
        userScoreVal++;
        userScore.innerText = userScoreVal;
        if (userScoreVal===3){
            document.body.style.backgroundColor = 'green';
            document.getElementsByClassName('modal-body')[0].innerHTML = 'Game over, you win!';
            theModal.style.display = 'block';
        }
    } else if (result === 'lose') {
        let computerScoreVal = Number(computerScore.innerText);
        document.getElementsByClassName('scores')[0].style.display = 'flex';
        computerScoreVal++;
        computerScore.innerText = computerScoreVal;
        if (computerScoreVal===3){
            document.body.style.backgroundColor = 'red';
            document.getElementsByClassName('modal-body')[0].innerHTML = 'Game over, you lose!';
            theModal.style.display = 'block';
        }
    }
    document.getElementById('resultDisplay').innerText = result;
}

function computerTurn() {
    let numChosen = Math.floor(Math.random()*3);
    switch (numChosen) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function turnResult(choice, computer) {
    switch (choice) {
        case 'rock':
            switch (computer) {
                case 'rock':
                    return 'draw';
                case 'paper':
                    return 'lose';
                case 'scissors':
                    return 'win';
            }
        case 'paper':
            switch (computer) {
                case 'rock':
                    return 'win';
                case 'paper':
                    return 'draw';
                case 'scissors':
                    return 'lose';
            }
        case 'scissors':
            switch (computer) {
                case 'rock':
                    return 'lose';
                case 'paper':
                    return 'win';
                case 'scissors':
                    return 'draw';
            }
    }
}

function fillResult (choice, computer) {
    userChoice.innerHTML = choice;
    computerChoice.innerHTML = computer;
}

function resetGame() {
    document.body.style.backgroundColor = 'white';
    userScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    userChoice.innerHTML = "";
    computerChoice.innerHTML = "";
    document.getElementsByClassName('choices')[0].style.display = 'none';
    document.getElementsByClassName('scores')[0].style.display = 'none';
    document.getElementsByClassName('results')[0].style.display = 'none';
    closeModal();
}

function closeModal() {
    theModal.style.display = 'none';
}