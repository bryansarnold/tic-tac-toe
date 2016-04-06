'use strict';

const winning = require ('./winning.js');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');



let setMessage = function (msg) {
  document.getElementById("message").innerText = msg;
};

let startTurn = function(setMessage) {
  document.turn = "X";
  setMessage(document.turn + "Gets to start first");
};

let nextTurn = function(box) {
  box.innerText = document.turn;
};



module.exports = {
  setMessage,
  startTurn,
  nextTurn,
};
