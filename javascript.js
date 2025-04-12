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
                console.log("You Win! rock beats scissor");
                break;
            case "paper beats rock":
                humanScore++;
                console.log("You Win! paper beats rock");
                break;
            case "scissor beats paper":
                humanScore++;
                console.log("You Win! scissor beats paper");
                break;
            default:
                computerScore++;
                console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        }
    }
}

function playGame(){
    let keepGoing = true;
    while(keepGoing){
        playRound(getHumanChoice(), getComputerChoice())
        if(humanScore == 5 || computerScore == 5){
            keepGoing = false;
        }
    }
    console.log("Final Score -> You: " + humanScore + " Computer: " + computerScore)
}

let main = document.querySelector('main')
main.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        let humanChoice = event.target.textContent.toLowerCase()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        
    }
})




