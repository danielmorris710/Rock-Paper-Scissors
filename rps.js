//computer random choices
function computerPlay(){
    let rock = "Rock"
    let paper = "Paper"
    let scissors = "Scissors"
    let randomPlay = Math.random()

    if (randomPlay <= 0.33){
        return rock
    } else if (randomPlay <= 0.66){
        return paper
    } else {
        return scissors
    }
}

//the game rules //game rounds loop  //selections //different outcomes
function game(){
    let rounds = 0
    let playerWins = 0
    let computerWins = 0
    let winner = ""

    while ( rounds <= 5){
        rounds++
        const computerSelection = computerPlay()
        playerSelection = prompt("Player make your choice. CHOOSE WISELY! ..... (Rock....Paper ... or .... Scissors")
        console.log(playRound(input(playerSelection), computerSelection))
        console.log("Your wins :" + playerWins)
        console.log("Computer wins :" + computerWins)
    


        function playRound(playerSelection, computerSelection){
                let tie = "It's a tie! You  both chose " + playerSelection  
                let win = "You win! " + playerSelection + " beats " + computerSelection 
                let lose = "You lose! " + computerSelection + " beats " + playerSelection 

            if (playerSelection == computerSelection){
                return tie
            } else if ((playerSelection == "Paper" && computerSelection == "Rock") || 
                       (playerSelection == "Rock" && computerSelection == "Scissors") ||
                       (playerSelection == "Scissors" && computerSelection == "Paper")){
                        playerWins++
                        return win

            } else { ((playerSelection == "Rock" && computerSelection == "Paper") ||
                      (playerSelection == "Scissors" && computerSelection == "Rock")||
                      (playerSelection == "Paper" && computerSelection == "Scissors"))
                       computerWins++
                       return lose
             }
       
                      
        }  
        
    }    


    //winner 
        if(playerWins > computerWins){
            winner = "YOU WIN"
        } else if (playerWins === computerWins){
            winner = "TIED"
        } else {
            winner = "COMPUTER WINS"
        }

        console.log(winner)

    //letter choice doesnt matter capital or what STILL RETURNS FIRST CAPITAL 
    function input(choice){
         let wordCase = choice.toLowerCase()
         let playerSelection = wordCase.charAt(0).toUpperCase() + wordCase.slice(1)
        return playerSelection
    }

}

//call the game function to start it 
game()