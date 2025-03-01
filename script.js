function getComputerChoice() {
    let rand = Math.random() * 3;
    if (rand < 1) return "rock";
    if (rand < 2) return "paper";
    return "scissors";
}


function getHumanChoice() {
    let decision = prompt("Make your decision (R)ock, (P)aper, (S)cissors").toUpperCase();
    if (decision == "R") return "rock";
    else if (decision == "P") return "paper";
    else if (decision == "S") return "scissors";
    else {
        alert("your decision is invalid");
        return getHumanChoice();
    }
}

function announce(announcement, c1, c2) {
    if (announcement == "lose") 
        ++computerScore;
    else 
        ++humanScore;
    alert(`You ${announcement}! ${c1} beats ${c2}`);
}

function playRound(human, computer) {
    if (human == computer) {
        alert("You draw!");
    }
    else {
        if ((human == "rock" && computer == "paper") || (human == "paper" && computer == "scissors") || (human == "scissors" && computer == "rock"))
            announce("lose", computer, human);
        else 
        announce("win", human, computer); 
    }
}
let humanScore = 0, computerScore = 0;

function playGame() {
    for(let i = 0; i < 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) 
        alert("You win the game");
    else 
        alert("You lose the game");
}

playGame();

// console.log(getHumanChoice());
