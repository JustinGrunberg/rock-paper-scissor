let answers = ["rock", "paper", "scissor"]

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

