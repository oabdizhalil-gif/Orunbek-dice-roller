function runRollBtn(){
    const userInput = document.getElementById("userInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const diceTotal = document.getElementById("diceTotal");
    const values = [];
    const images = [];
    let totalScore = 0;
    

    for(let i = 0; i < userInput; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="${value}-image">`);
        console.log(value);
        totalScore += value;
    }

    
    diceTotal.textContent = `Total score is: ${totalScore}`;
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');

}