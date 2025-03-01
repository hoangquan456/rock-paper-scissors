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
let humanScore = 0, computerScore = 0;



playRound(getHumanChoice(), getComputerChoice()); 

// console.log(getHumanChoice());
