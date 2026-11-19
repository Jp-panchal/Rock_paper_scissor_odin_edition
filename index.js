console.log("hello world");

function playGame() {

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

    for (let index = 0; index <= round; index++) {

        let computerSelection = getComputerChoice()
        console.log(computerSelection)

        let humanSelection = getHumanChoice().toLowerCase()
        console.log(humanSelection)


        function playRound(computerSelection, humanSelection) {
            if (computerSelection == humanSelection) {
                tieScore=tieScore+1
                console.log("Tie! Nobody wins")
                console.log(tieScore)
            } else if (computerSelection == "paper" && humanSelection == "rock") {
                computerScore=computerScore+1
                console.log("You lose! and Computer won paper beats rock")
                console.log(computerScore)
            } else if (computerSelection == "rock" && humanSelection == "scissor") {
                computerScore=computerScore+1
                console.log("You lose! and Computer won rock beats paper")
                console.log(computerScore)
            } else if (computerSelection == "scissor" && humanSelection == "rock") {
                humanScore=humanScore+1
                console.log("You won! and Computer lose rock beats scissor")
                console.log(humanScore)
            } else if (computerSelection == "paper" && humanSelection == "scissor") {
                humanScore=humanScore+1
                console.log("You won! and Computer lose scissor beats paper")
                console.log(humanScore)
            } else if (computerSelection == "scissor" && humanSelection == "paper") {
                computerScore=computerScore+1
                console.log("You lose! and Computer won scissor beats paper")
                console.log(computerScore)
            }
        }
        playRound(computerSelection,humanSelection)
    }
    console.log(`tie:${tieScore} | win:${humanScore} | lose:${computerScore}`)
}

console.log(playGame())