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

const threeInARow = [[$("#box1"), $("#box2"), $("#box3")],[$("#box4"), $("#box5"), $("#box6")],[$("#box7"), $("#box8"), ("$#box9")]];

const threeInACol = [[$("#box1"), $("#box4"), $("#box7")],[$("#box2"), $("#box5"), $("#box8")],[$("#box3"),$("#box6"), ("$.box9")]];

const threeInADiag = [[$("#box1"),$("#box5"),$("#box9")],[$("#box3"),$("#box5"),$("#box9")]];

const winningMoveCheck = function(threeInARow, threeInACol, threeInADiag) {
  if (threeInARow === "X" || threeInACol === "X" || threeInADiag === "X") {
    return "X wins!";
  } else if (threeInARow === "O" || threeInACol === "O" || threeInADiag === "O") {
    return "O wins!";
  }
};

const tieCheck = function () {
    for (var i = 1; i < 10; i++) {
      if (threeInARow !== "X" || threeInACol !== "X" || threeInADiag !== "X") {
        return "It's a Tie! Say it Aint So!";
      } else if (threeInARow !== "O" || threeInACol !== "O" || threeInADiag !== "O") {
        return "It's a Tie! Didn't see that coming!";
    }
  }
};
// $(() => {

// const firstTurn = function () {
$("#boxArray").click(function(){
   $(this).text("X");
 });
//   return this;
// };

const nextTurn = function()  {
  $(".boxArray").click(function(){
   $(this).text("O");
 });
 return this;
};

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
