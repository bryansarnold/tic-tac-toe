// 'use strict';
//
// const winningMove = function(move) {
//   let result;
//   let theWinner;
//   if (theWinner(1, 2, 3, move) ||
//       theWinner(4, 5, 6, move) ||
//       theWinner(7, 8, 9, move) ||
//       theWinner(1, 4, 7, move) ||
//       theWinner(2, 5, 8, move) ||
//       theWinner(3, 6, 9, move) ||
//       theWinner(1, 5, 9, move) ||
//       theWinner(3, 5, 7, move)) {
//         result = true;
//     }
//     return result;
//   };
//
// const nextTurn = function(box) {
//   let switchTurn;
//   if (document.winner !== null) {
//     setMessage(document.winner + " already won!");
//   } else if (box.innerText === "") {
//       box.innerText = document.turn;
//     switchTurn();
//   } else {
//     setMessage("Box is Taken");
//   }
// };
//
// $('#message').click(function(){
//
// const switchTurn = function() {
//     if (winningMove(document.turn)) {
//       setMessage("Congrats " + document.turn + " wins it!");
//       document.winner = document.turn;
//   } else if (document.turn === "O") {
//     setMessage("It's " + document.turn + "'s turn!");
//     document.turn = "O";
//
//   } else {
//     document.turn = "X";
//     setMessage("It's " + document.turn + "'s turn!");
//   }
// };
//
// const getBox = function(num) {
//   return document.getElementById("box" + num).innerText;
// };
//
// const theWinner = function (a, b, c, move) {
//   let result = false;
//   if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
//     result = true;
//   }
//   return result;
// };
//
// $(document).ready(function(){
//   //code here
// });
//
//
// const setMessage = function(msg) {
//   document.getElementById("message").innerText = msg;
//   // $("#message").text(msg)
// };
//
// const startGame = function(setMessage) {
//   document.turn = "X";
//   document.winner = null;
//   setMessage(document.turn + " gets to start first!");
// };
