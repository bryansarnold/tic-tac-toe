'use strict';

let winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

// let winnerX = function() {
//   return winsRowX() || winsColX() || winsDiagX();
// };
//
// let winnerO = function() {
//   return winsRowO() || winsColO() || winsDiagO();
// };

let winningMoveX = function() {
  return  threeInARowX(boxNumber('1'), boxNumber('2'), boxNumber('3')) ||
          threeInARowX(boxNumber('4'), boxNumber('5'), boxNumber('6')) ||
          threeInARowX(boxNumber('7'), boxNumber('8'), boxNumber('9')) ||
          threeInARowX(boxNumber('1'), boxNumber('5'), boxNumber('9')) ||
          threeInARowX(boxNumber('3'), boxNumber('5'), boxNumber('7'));
;
};
// let threeInARowX = function(gridBoxOne, gridBoxTwo, gridBoxThree) {
// };
  let winningMoveO = function() {
    return  threeInARowO(boxNumber('1'), boxNumber('2'), boxNumber('3')) ||
            threeInARowO(boxNumber('4'), boxNumber('5'), boxNumber('6')) ||
            threeInARowO(boxNumber('7'), boxNumber('8'), boxNumber('9')) ||
            threeInARowO(boxNumber('1'), boxNumber('5'), boxNumber('9')) ||
            threeInARowO(boxNumber('3'), boxNumber('5'), boxNumber('7'));
  };
  // let threeInARowO = function(gridBoxOne, gridBoxTwo, gridBoxThree)
