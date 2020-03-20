/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer
scores = [0,0]
roundScore = 0
activePlayer = 0

//Setter
//document.querySelector('#current-' + activePlayer ).textContent = dice
//document.querySelector('#current-' + activePlayer ).innerHTML = '<em>' + dice + '<em>'

//Getter
// var x = document.querySelector('#score-0').textContent;

function setZero() {

    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score-0').textContent = 0
    document.getElementById('score-1').textContent = 0
    document.getElementById('current-0').textContent = 0
    document.getElementById('current-1').textContent = 0

}
setZero()

// function btn() {
//     //Something here
// }
// btn()
// document.querySelector('.btn-roll').addEventListener('click', btn)

//Anonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random Number
    let dice = randomNumber()
    
    //2. Display the result
    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'
    diceDOM.src = 'starter/dice-' + dice + '.png'

    //3. Update the round score if the rolled number was Not a 1 
    //!== does not do type cooercon
    if( dice !== 1 ) {
        //Add score
        roundScore += dice
        document.querySelector('#current-' + activePlayer ).textContent = roundScore
    } else {
        //Next Player
        nextPlayer()
    }

})


document.querySelector('.btn-hold').addEventListener('click', function() {
    //1.Add Current score to global score
    scores[activePlayer] += roundScore

    //2. Update the UI interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    nextPlayer()

    //3. Check if the player won the game
    if(scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner'
        document.querySelector('#name-' + activePlayer).style.color = 'red' 
    } else {
        nextPlayer()
    }
})


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    // document.querySelector('.player-0-panel').classList.remove('active')
    // document.querySelector('.player-1-panel').classList.add('active')

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'
}

function randomNumber() {
    return Math.floor(Math.random() * 6) + 1
}
