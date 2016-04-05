'use strict';

let threeInARow = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

let theWinner = function(player) {
  return winningRowMove() || winningColMove() || winningDiagMove();
};

let winningRowMove = function(player) {
  return threeInARow([0]) ||
         threeInARow([1]) ||
         threeInARow([2]);
// return    gridArray(['1']), gridArray(['2']), boxNumber(['3'])) ||
//           threeInARow(boxNumber(['4']), boxNumber(['5']), boxNumber(['6'])) ||
//           threeInARow(boxNumber(['7']), boxNumber(['8']), boxNumber(['9'])) ;
};
  let winningColMove = function(player) {
    return threeInARow([3]) ||
           threeInARow([4]) ||
           threeInARow([5]);
    // return  threeInARow(boxNumber(['1']), boxNumber('4'), boxNumber('7')) ||
    //         threeInARow(boxNumber('2'), boxNumber('5'), boxNumber('8')) ||
    //         threeInARow(boxNumber('3'), boxNumber('6'), boxNumber('9')) ;
  };
  let winningDiagMove = function(player) {
    return threeInARow([6]) ||
           threeInARow([7]);
    // return  threeInARow(boxNumber('1'), boxNumber('5'), boxNumber('9')) ||
    //         threeInARow(boxNumber('3'), boxNumber('5'), boxNumber('7'));
  };
  // let winningArray = function(player, winningRowMove, winningColMove, winningDiagMove) {
  //   return (winningRowMove === player) && (boxNumberTwo === player) && (boxNumberThree = player);
  // };
