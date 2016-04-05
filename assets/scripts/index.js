'use strict';

const require 

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');


let gridArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let getWinner = function() {
    if (winnerX()) {
      return 'Player 1 Wins!';
      console.log("Player 1 Wins!");
    }
    if (winnerO()) {
      return 'Player O Wins!';
      console.log("Player O Wins!");
    }
    return 'We have a Tie!';
  };
