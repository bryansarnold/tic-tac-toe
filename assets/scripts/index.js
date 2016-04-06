'use strict';

const winning = require ('./winning.js');

// const index = require('./bundle.js');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');


      let setMessage = function(msg) {
        document.getElementById("message").innerText = msg;
      };

      let startGame = function(setMessage) {
        document.turn = "X";
        document.winner = null;
        setMessage(document.turn + " gets to start first!");
      };

      let switchTurn = function() {
          if (winningMove(document.turn)) {
            setMessage("Congrats " + document.turn + " wins it!");
            document.winner = document.turn;
        } else if (document.turn === "O") {
          setMessage("It's " + document.turn + "'s turn!");
          document.turn = "O";

        } else {
          document.turn = "X";
          setMessage("It's " + document.turn + "'s turn!");
        }
      };

      let nextTurn = function(box) {
        if (document.winner !== null) {
          setMessage(document.winner + " already won!");
        } else if (box.innerText === "") {
            box.innerText = document.turn;
          switchTurn();
        } else {
          setMessage("Box is Taken");
        }
      };

      let theWinner = function (a, b, c, move) {
        let result = false;
        if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
          result = true;
        }
        return result;
      };

      let getBox = function(num) {
        return document.getElementById("box" + num).innerText;
      };


module.exports = {
  setMessage,
  startGame,
  switchTurn,
  nextTurn,
  theWinner
};
