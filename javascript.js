function getComputerChoice(){
    let answers = ["rock", "paper", "scissor"]
    let randomNumber = Math.floor(Math.random() * 3)
    return answers[randomNumber];
}

