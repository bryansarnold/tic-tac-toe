'use strict';

// const index = require('./bundle.js');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./users.js');
require('./auth/events.js');
//
//
const boxArray = [$("#box1"), $("#box2"), $("#box3"), $("#box4"), $("#box5"), $("#box6"), $("#box7"), $("#box8"), $("#box9")];

const threeInATopRow = [[$("#box1"), $("#box2"), $("#box3")];

const threeInAMiddleRow = [$("#box4"), $("#box5"), $("#box6")];

const threeInABottomRow$ = [("#box7"), $("#box8"), ("$#box9")]];

const threeInAFirstCol = [[$("#box1"), $("#box4"), $("#box7")];

const threeInASecondCol = [$("#box2"), $("#box5"), $("#box8")];

const threeInAThirdCol = [$("#box3"),$("#box6"), ("$.box9")]];

const threeInAFirstDiag = [[$("#box1"),$("#box5"),$("#box9")];

const threeInASecondDiag = [$("#box3"),$("#box5"),$("#box7")]];

let gridDisplay = [" ", " ", " ", " ", " ", " ",]
let player = ['X', 'O'];
let currentPlayer = null;
let move = 0;
let winningMove = false;
let tie = false;

const winningMoveCheck = function() {
  if (threeInATopRow ===    [$("#box1"), $("#box2"), $("#box3")] ||
      threeInAMiddleRow === [$("#box4"), $("#box5"), $("#box6")] ||
      threeInABottomRow === [$("#box7"), $("#box8"), $("#box9")] ||
      threeInAFirstCol === [$("#box1"), $("#box4"), $("#box7")]  ||
      threeInASecondCol === [$("#box2"), $("#box5"), $("#box8")] ||
      threeInAThirdCol === [$("#box3"), $("#box6"), $("#box9")]  ||
      threeInAFirstDiag === [$("#box1"), $("#box5"), $("#box9")] ||
      threeInASecondDiag === [$("#box3"), $("#box5"), $("#box7")]) {
      winningMove = true;
}

const tieCheck = function (move) {
    for (let i = 1; i >= 9; i++) {
          tie = true;
          console.log("It's a Tie! Didn't see that coming!");
  }
};

const currentTurn = function() {
  $(".boxArray").one('click', function(   if(move / 2 === O) {

   }}
     currentPlayer = player[0];
   } else {
     currentPlayer = player[1];
   }
 });
turn++;

$('#sign-up').on('submit', function(event){
  event.preventDefault();
  let form = getFormFields(event.target);
});

$('#sign-in').on('submit', function(){
  event.preventDefault();
  let form = getFormFields(event.target);
});

$('#sign-out').on('submit', function(event){
  event.preventDefault();
  let form = getFormFields(event.target);
});


// playerOneMove = function (firstTurn) {
//   $(".box").html("X"); {
//     return = "X";
//   }
// };


// });
//
// module.exports = {
//
// };
