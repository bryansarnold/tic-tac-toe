'use strict';

const winning = require ('./winning.js');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');


let gridArray = ['1', '2', '3', '4', '5', '6','7', '8', '9'];


// for (var i = 0; i < gridArray.length; i++) {
//   gridArray[i]
// } return player1()

let getWinner = function(theWinner) {
    if (player1(theWinner)) {
      return 'Player 1 Wins!';
    } else if (player2(theWinner)) {
      return 'Player 2 Wins!';
    } else {
    return 'We have a Tie Folks!';
  }
};
