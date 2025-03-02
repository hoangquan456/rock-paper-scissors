function getComputerChoice() {
    let rand = Math.random();
    if (rand < 1/3) return "rock";
    if (rand < 2/3) return "paper";
    return "scissors";
}

function announce(announcement, c1, c2) {
    if (announcement == "lose") 
        ++computerScore;
    else 
        ++humanScore;
    roundResult.textContent = `You ${announcement}! ${c1} beats ${c2}`;
}

function playRound(human, computer) {
    if (human == computer) {
        roundResult.textContent = "You draw!";
    }
    else {
        if ((human == "rock" && computer == "paper") || (human == "paper" && computer == "scissors") || (human == "scissors" && computer == "rock"))
            announce("lose", computer, human);
        else 
            announce("win", human, computer); 
    }
    setScore();
}
let humanScore = 0, computerScore = 0;

let body = document.querySelector("body");
body.addEventListener("click", (e)=>{
    if (e.target.tagName !== "BUTTON") return;
    playRound(e.target.id, getComputerChoice());
    if (humanScore == 5) {
        setTimeout(() => {
            alert("Victory! You have beaten AI!");
            humanScore = computerScore = 0;
            roundResult.textContent = "";
            setScore();
        }, 0);
    }
    else if (computerScore == 5) {
        setTimeout(() => {
            alert("Defeat! AI will take over the world")
            humanScore = computerScore = 0;
            roundResult.textContent = "";
            setScore();
        }, 0);
    }
});

let div1 = document.createElement("div"); 
let div2 = document.createElement("div"); 
let roundResult = document.createElement("div");
body.append(div1, div2, roundResult);

function setScore() {
    div1.textContent = `Your Score: ${humanScore}`;
    div2.textContent = `Computer Score: ${computerScore}`;
}

setScore();
