'use strict';

// const index = require('./bundle.js');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./users.js');
//
//
// let threeInARow = [[1,2,3],[4,5,6],[7,8,9]];
//
// let threeInACol = [[1,4,7],[2,5,8],[3,6,9]];
//
// let threeInADiag = [[1,5,9],[3,5,7]];
//
// let gridArray = [1, 2, 3],
//                 [4, 5, 6],
//                 [8, 9, 10];
//
let gameBoard = $()




const firstTurn = function () {
  $(".box").click(function(){
   $(this).text("X");
  });
};

const nextTurn = function()  {
  $(".box").click(function(){
   $(this).text("O");
 });
};

playerOneMove = function (firstTurn) {
  
};

// let threeInARow = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

// WinningMove = function () {
//
// }
//
// WinningMoveCheck = function() {
//   if
// }


// const gameBoard = box1 = null,

//
// const startGame = function() {
//   document.turn = "X";
//   document.winner = null;
//   $('#message').click(function(){
//    return (document.turn + " gets to start first!");
//   }
// });





// module.exports = {
//
// };
