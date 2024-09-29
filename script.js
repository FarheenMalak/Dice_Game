function rollDice() {
    const diceNumber = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    const diceImage = document.getElementById('dice');
    diceImage.src = `images/dice${diceNumber}.png`; // Change the dice image
    document.getElementById('result').innerHTML = `You rolled a ${diceNumber}!`; // Display result
}
