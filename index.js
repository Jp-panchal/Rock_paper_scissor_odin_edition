console.log("hello world");

function getComputerChoice(){
    let comChoice = Math.floor((Math.random()*100)+1)
    if (comChoice <= 35) {
        return "rock"
    }
    else if (comChoice >=36 && comChoice <= 75) {
        return "paper"
    } else {
        return "scissor"
    }
};

let computerSelection = getComputerChoice()
console.log(computerSelection)