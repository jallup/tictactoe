/*
In this code some ideas are from an youtube video, which is linked below

https://www.youtube.com/watch?v=P2TcQ3h0ipQ

*/

import "./styles.css";

// const ttt contains cells of table board

const ttt = document.querySelectorAll(".ttt");

// This is straight from course material, checks that document is loaded before any game functions are called

if (document.readyState !== "loading") {
  // Document ready, executing
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    // Document was not ready, executing when loaded
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

// Other variables and constants

var playBoard; // Will be an array containing all the moves players has made

const one = "o";

const two = "x";

var Player = "x";

// Matrix containing all the ways game can be won

const winner = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [4, 9, 14, 19, 24],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

function initializeCode() {
  startGame();
  replayFunction();
}
// This function will start the game, makes playBoard array for moves and then initializes click action to every cell
function startGame() {
  playBoard = Array.from(Array(25).keys());

  for (var i = 0; i < ttt.length; i++) {
    ttt[i].innerText = "";

    ttt[i].addEventListener("click", clickCell, false);
  }
}
// Function containing to actions for cell clikcs
function clickCell(cells) {
  if (document.getElementById(cells.target.id).innerText === "") {
    if (Player === one) {
      Player = two;
    } else if (Player === two) {
      Player = one;
    }

    turn(cells.target.id, Player);
  }
}
// Trun function wich marks the players moves on array and checks if player has won after a move with gameOver function
function turn(cellsId, player) {
  playBoard[cellsId] = player;
  document.getElementById(cellsId).innerText = player;
  gameOver(player);
}
// This function will check if player has won
function gameOver(player) {
  var win = 0;

  for (var i = 0; i < 12; i++) {
    win = 0;
    for (var j = 0; j < 5; j++) {
      if (playBoard[winner[i][j]] === player) {
        win++;
      }

      if (win === 5) {
        alert("Player " + player + " won!");
        startGame();
      }
    }
  }
}
// Action for replay button, starts the game from the start
function replayFunction() {
  document.getElementById("replay").addEventListener("click", startGame, false);
}
