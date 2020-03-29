function computerPLay(){
    choices = ['rock', 'paper', 'scissors']
    computerSelection = choices[Math.floor(Math.random() * choices.length)]
    return computerSelection
}


function playRound() {

    computerScore = 0
    playerScore = 0
    for (i = 0; i < 5; i++) {
        playerSelection = window.prompt('Rock, Paper or Scissors?')
        computerSelection = computerPLay()


        if (computerSelection === 'rock') {
            if (playerSelection.toLowerCase() === 'paper') {
                window.alert(`Player: ${playerSelection} | Computer: ${computerSelection}`)
                window.alert('Player Wins')
                playerScore++
                
            }
            else if (playerSelection.toLowerCase() === 'scissors') {
                window.alert(`Player: ${playerSelection} | Computer: ${computerSelection}`)
                window.alert('Computer wins')
                computerScore++

            }
            else {
                window.alert(`Player: ${playerSelection} | Computer: ${computerSelection}`)
                window.alert('TIE')
            }
        }

        else if (computerSelection === 'paper') {
            if (playerSelection.toLowerCase() === 'rock') {
                window.alert(`Player: ${playerSelection} | Computer: ${computerSelection}`)
                window.alert('Computer wins')
                computerScore++
            } else if (playerSelection.toLowerCase() === 'scissors') {
                window.alert(`Player: ${playerSelection} | Computer: ${computerSelection}`)
                window.alert('Player wins')
                playerScore++
            } else {
                window.alert(`Player: ${playerSelection} | Computer: ${computerSelection}`)
                window.alert('TIE')

            }
        } else if (computerSelection === 'scissors') {
            if (playerSelection.toLowerCase() === 'rock') {
                window.alert(`Player: ${playerSelection} | Computer: ${computerSelection}`)
                window.alert('Player wins')
                playerScore++
            } else if (playerSelection.toLowerCase() === 'paper') {
                window.alert(`Player: ${playerSelection} | Computer: ${computerSelection}`)
                window.alert('Computer wins')
                computerScore++
            } else {
                window.alert(`Player: ${playerSelection} | Computer: ${computerSelection}`)
                window.alert('TIE')
            }
        }

    }
    document.write('------------------ SCORE ------------------</br>')
    document.write(`Player: ${playerScore} | Computer: ${computerScore}`)
    

}


playerSelection = 'Rock'
playRound(playerSelection)




