let answers = ["rock", "paper", "scissor"]
let humanScore = 0;
let computerScore = 0;

let main = document.querySelector('main')
let result = document.querySelector('.result')
let score = document.querySelector('.score')

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
        result.textContent = "Tie! " + humanChoice + " equals " + computerChoice;
    }
    else{
        switch (humanChoice + " beats " + computerChoice){
            case "rock beats scissor":
                humanScore++;
                result.textContent = "You Win! rock beats scissor";
                break;
            case "paper beats rock":
                humanScore++;
                result.textContent = "You Win! paper beats rock";
                break;
            case "scissor beats paper":
                humanScore++;
                result.textContent = "You Win! scissor beats paper";
                break;
            default:
                computerScore++;
                result.textContent = "You Lose! " + computerChoice + " beats " + humanChoice;
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


main.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        let humanChoice = event.target.textContent.toLowerCase()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        score.textContent = 'You: ' + humanScore + ' Computer: ' + computerScore 
    }
})




