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

//game rules //add buttons remove prompt //first to 5 winner //different outcomes
function game(){
    let playerWins = 0
    let computerWins = 0
    const buttons = document.querySelectorAll('.player-button')

    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            playRound(button.value)
        })
    })


    function disableButtons() {
        buttons.forEach(elem => {
            elem.disabled = true
        })
    }

    function playRound(playerSelection) {
        const computerSelection = computerPlay()
        let result = " "

        let tie = "It's a tie! You  both chose " + playerSelection  
        let win = "You win! " + playerSelection + " beats " + computerSelection 
        let lose = "You lose! " + computerSelection + " beats " + playerSelection 
        let winner ="YOU BEAT THE COMPUTER !!!"
        let loser = "YOU LOST TO THE COMPUTER !!!"

        if (playerSelection == computerSelection){
            result = tie
        } else if ((playerSelection == "Paper" && computerSelection == "Rock") || 
                   (playerSelection == "Rock" && computerSelection == "Scissors") ||
                   (playerSelection == "Scissors" && computerSelection == "Paper")){
                    playerWins++
                    result = win

                if (playerWins == 5){
                    result = winner
                    disableButtons()
                } 

        } else { ((playerSelection == "Rock" && computerSelection == "Paper") ||
                  (playerSelection == "Scissors" && computerSelection == "Rock")||
                  (playerSelection == "Paper" && computerSelection == "Scissors"))
                   computerWins++
                   result = lose

                if (computerWins == 5){
                    result = loser
                    disableButtons()
                } 
        }

        document.getElementById('result').innerHTML = result    
        document.getElementById('playerscore').innerHTML = `<b>Player</b><br> ${playerWins}`;
        document.getElementById('computerscore').innerHTML = `<b>Comp</b><br> ${computerWins}`;

    } 

}

//call game function to test changes
game()

