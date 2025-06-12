const zufallszahl = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

const guess = document.getElementById('guess');
const submitButton = document.getElementById('submitGuess');
const messageDisplay = document.getElementById('message');

submitButton.addEventListener('click', checkGuess);

function checkGuess(){
    const userGuess = Number(guess.value);
    guessCount++;
    if (userGuess === zufallszahl) {
        messageDisplay.textContent = `Sehr gut! Du hast die Zahl ${zufallszahl} in ${guessCount} Versuchen erraten.`;
        submitButton.disabled = true;
        guess.disabled = true;
    } else if (userGuess < zufallszahl) {
        messageDisplay.textContent = 'Zu niedrig!'
    } else {
        messageDisplay.textContent = 'Zu hoch!'
    }

}