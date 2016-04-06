'use strict';


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


module.exports = true;
