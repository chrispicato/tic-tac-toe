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
    '1' + board[1] + ' |2' + board[2] + ' |3' + board[3], ' |\n' +
    '4' + board[4] + ' |5' + board[5] + ' |6' + board[6], ' |\n' +
    '7' + board[7] + ' |8' + board[8] + ' |9' + board[9], ' |'
  );
};

var username1, marker1, username2, marker2, count, winner;
prompt.start();
prompt.get(['username1', 'marker1', 'username2', 'marker2', 'player1Input1', 'player2Input1'], function (err, result) {
  // , 'player1Input2', 'player2Input2', 'player1Input3', 'player2Input3', 'player1Input4', 'player2Input4', 'player1Input5'], function (err, result) {
  username1 = result.username1;
  marker1 = result.market1;
  username2 = result.username2;
  marker2 = result.marker2;

  console.log('Your results and are markers are:');
  console.log('Player 1\'s username is: ' + result.username1);
  console.log('Player 1\'s marker is: ' + result.marker1);
  console.log('Player 2\'s username is: ' + result.username2);
  console.log('Player 2\'s marker is: ' + result.marker2);

  console.log(result.player1Input1);
  board[result.player1Input1] = result.marker1;
  printBoard();

  console.log(result.player1Input2);
  board[result.player2Input1] = result.marker2;
  printBoard();
});

// printBoard();

// var player1Input;

// create function that uses validation function and placing function

// create list of winning combinations

// create a function that checks the board if there's a winning combination
