let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// console.log(s a random integer between 0 and 9
const generateTarget = () => {
    randomInteger = Math.floor(Math.random() * 10)
    return randomInteger
}

// Determines which guess is closest to the target number.
const compareGuesses = (userGuess, computerGuess, targetNumber) => {

    userDistance = Math.abs(userGuess - targetNumber)
    computerDistance = Math.abs(computerGuess - targetNumber)

    if (userDistance < computerDistance) {
        return true
    } else if (userDistance > computerDistance) {
        return false
    } else if (userDistance === computerDistance) {
        return true
    }
}

// console.log(compareGuesses())

let updateScore = (result) => {
    if (result === 'human') {
        humanScore = humanScore + 1
    } else if (result === 'computer') {
        computerScore = computerScore + 1
    }
}

const advanceRound = () => {
    currentRoundNumber = currentRoundNumber + 1
    return currentRoundNumber
}