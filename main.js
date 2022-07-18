var randomNumber1 = Math.floor(6 * Math.random()) + 1 ; //random select 1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1-dice6 PNGs

 document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

 var randomNumber2 = Math.floor(6 * Math.random()) + 1;

 var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

 //player 1 wins
 if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!!!"
 }

 //player 2 wins
 else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "🚩 Player 2 Wins!!!"
 }
 
 //DRAW
 else{
    document.querySelector("h1").textContent = "It's a draw!!!  Refresh Me"
 }