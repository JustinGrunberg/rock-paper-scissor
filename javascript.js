let answers = ["rock", "paper", "scissor"]
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
    return answers[randomNumber];
}

function getHumanChoice(){
    let answer = prompt("Rock, Paper, Scissor?").toLocaleLowerCase();
    if(answers.includes(answer)){
        return answer;
    }
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        console.log("Tie! " + humanChoice + " equals " + computerChoice);
    }
    else{
        switch (humanChoice + " beats " + computerChoice){
            case "rock beats scissor":
                humanScore++;
                console.log("You Win! Rock beats Scissor");
                break;
            case "paper beats rock":
                humanScore++;
                console.log("You Win! Paper beats Rock");
                break;
            case "scissor beats paper":
                humanScore++;
                console.log("You Win! Scissor beats Paper");
                break;
            default:
                computerScore++;
                console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        }
    }
}



