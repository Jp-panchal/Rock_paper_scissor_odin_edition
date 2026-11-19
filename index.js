console.log("hello world");

function playGame() {

    let computerSelection = getComputerChoice()
    console.log(computerSelection)

    let humanSelection = getHumanChoice().toLowerCase()
    console.log(humanSelection)

    let tieScore = 0
    let computerScore = 0,
        humanScore = 0
    let round = 5

    function getComputerChoice() {
        let comChoice = Math.floor((Math.random() * 100) + 1)
        if (comChoice <= 35) {
            return "rock"
        }
        else if (comChoice >= 36 && comChoice <= 75) {
            return "paper"
        } else {
            return "scissor"
        }
    };

    function getHumanChoice() {
        return prompt("Enter Your Choice between :")
    }


    function playRound(computerSelection, humanSelection) {
        if (computerSelection == humanSelection) {
            console.log("Tie! Nobody wins")
            console.log(tieScore + 1)
        } else if (computerSelection == "paper" && humanSelection == "rock") {
            console.log("You lose! and Computer won paper beats rock")
            console.log(computerScore + 1)
        } else if (computerSelection == "rock" && humanSelection == "scissor") {
            console.log("You lose! and Computer won rock beats paper")
            console.log(computerScore + 1)
        } else if (computerSelection == "scissor" && humanSelection == "rock") {
            console.log("You won! and Computer lose rock beats scissor")
            console.log(humanScore + 1)
        } else if (computerSelection == "paper" && humanSelection == "scissor") {
            console.log("You won! and Computer lose scissor beats paper")
            console.log(humanScore + 1)
        } else if (computerSelection == "scissor" && humanSelection == "paper") {
            console.log("You lose! and Computer won scissor beats paper")
            console.log(computerScore + 1)
        }
    }
}

console.log(playGame())