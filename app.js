/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundscore, activePlayer, gameplaying;
newgame();
function newgame(){
  scores = [0,0];
  roundscore = 0;
  activePlayer = 0;
  gameplaying = true;
  document.querySelector(".dice").style.display ="none";
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("name-0").textContent = prompt("Enter Player 1 name");
  document.getElementById("name-1").textContent = prompt("Enter Player 2 name");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

}

function nextplayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundscore = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display ="none";
};

document.querySelector(".btn-roll").addEventListener("click", function(){

    if (gameplaying)  {
      var dice = Math.floor(Math.random()*6)+1;
      document.querySelector(".dice").style.display = "block";
      document.querySelector(".dice").src = "dice-" + dice + ".png";

      if (dice>1) {
            roundscore = roundscore + dice;
            document.querySelector("#current-" + activePlayer).textContent = roundscore;
      } else {
            nextplayer();
      }

    }
})

document.querySelector(".btn-hold").addEventListener("click", function(){

  if (gameplaying) {
    scores[activePlayer] = scores[activePlayer] + roundscore ;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= "100"){
      document.querySelector("#name-" + activePlayer).innerHTML = "<strong>Winner!</strong>";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      gameplaying = false ;

    } else {
      nextplayer();
    }
  }

})

document.querySelector(".btn-new").addEventListener("click", newgame);
