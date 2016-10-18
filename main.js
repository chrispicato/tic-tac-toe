var prompt = require('prompt');

var board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
};

var printBoard = function () {
  console.log('\n' +
    ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3], ' |\n' +
    ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6], ' |\n' +
    ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9], ' |'
  );
};

printBoard();
