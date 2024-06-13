function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceNum = document.getElementById("diceNum");
    const diceImage = document.getElementById("diceImage");

    const values = [];
    const images = [];

   for (let i = 0 ; i < numOfDice ; i++ ){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="imagess/${value}.png" alt="dice ${value}">`);
   } 

diceNum.textContent = `dice: ${values.join(', ')}`;
diceImage.innerHTML = images.join('');



}