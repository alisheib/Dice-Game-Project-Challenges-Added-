/* Your 3 challenges
change the game to follow these rules

1 - A player looses his ENTIRE score when he rolls two 6 in a row. After that , its the next player's turn .
(hint: Always save the previous dice roll in a seperate)
2 - Add an input feiled to the HTML where players can set the winning score, so that they can change the predefined score of 100.(Hint: you can read that value with the .value property in JavaScript. This is a good opportunity to use google to figure this out :)
3 - Add another dice to the game, so that there are two dices now. Th eplayer looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the css code for the first one.) */

var scores, roundScore, activePlayer , gamePlaying;
init();
var lastdice;

document.querySelector(".btn-roll").addEventListener("click" , function(){
    if (gamePlaying) {
         // 1. Random Number
     var dice1 = Math.floor(Math.random() * 6) + 1;
     var dice2 = Math.floor(Math.random() * 6) + 1;

     //2. Display the result
     document.querySelector("#dice-1").style.display = "block";
     document.querySelector("#dice-2").style.display = "block";
     document.querySelector("#dice-1").src ="images/dice-" + dice1 +".png" ;
     document.querySelector("#dice-2").src ="images/dice-" + dice2 +".png" ;
 
 
     //3. Update the round score if the rolled number was not a 1
     if (dice1 !== 1 && dice2 !==1) {
        //Add score
        roundScore += dice1 + dice2;
        document.querySelector("#current-" +activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }
     //if(dice === 6 && lastdice === 6) {
         //Player looses score
       //  scores[activePlayer] = 0;
         //document.querySelector("#score-" + activePlayer).textContent = "0";
         //nextPlayer();
     
        //} else if (dice !== 1) {
         //Add score
         //roundScore += dice;
         //document.querySelector("#current-" +activePlayer).textContent = roundScore;
     //} else {
         //Next player
       //  nextPlayer();
     //}
     //lastdice = dice;
    } 
});

document.querySelector(".btn-hold").addEventListener("click" , function(){
    if(gamePlaying) {
         // Add current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector(".final-score").value;
    var winningScore;

    // Undefined, 0, null or "" are COERCED to false
    //Anything else is COERCED  to true
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }

       
    // Check if player won the game
    if (scores[activePlayer] >= winningScore){
        document.querySelector("#name-" +  activePlayer).textContent = "winner!";
        document.querySelector("#dice-1").style.display = "none";
        document.querySelector("#dice-2").style.display = "none";
        document.querySelector(".player-"+activePlayer +"-panel").classList.add("winner")
        document.querySelector(".player-"+activePlayer +"-panel").classList.remove("active")
        gamePlaying = false;
        } else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
      //Next player
      activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
      roundScore = 0;
      document.querySelector("#current-0").textContent="0";
      document.querySelector("#current-1").textContent="0";
      document.querySelector(".player-0-panel").classList.toggle("active")
      document.querySelector(".player-1-panel").classList.toggle("active")
      //document.querySelector(".player-0-panel").classList.remove("active")
      //document.querySelector(".player-1-panel").classList.add("active")
      document.querySelector("#dice-1").style.display ="none";
      document.querySelector("#dice-2").style.display ="none";
}
function init(){
    scores =[0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
document.querySelector("#dice-1").style.display = "none";
document.querySelector("#dice-2").style.display = "none";
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector("#name-0").textContent = "Player 1";
document.querySelector("#name-1").textContent = "Player 2";
document.querySelector(".player-0-panel").classList.remove("winner")
document.querySelector(".player-1-panel").classList.remove("winner")
document.querySelector(".player-0-panel").classList.remove("active")
document.querySelector(".player-1-panel").classList.remove("active")
document.querySelector(".player-0-panel").classList.add("active")


}

document.querySelector(".btn-new").addEventListener("click" , init);

