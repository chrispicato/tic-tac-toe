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

var username1, marker1, username2, marker2;
prompt.start();
prompt.get(['username1', 'marker1', 'username2', 'marker2', 'player1Input'], function (err, result) {
  username1 = result.username1;
  marker1 = result.market1;
  username2 = result.username2;
  marker2 = result.marker2;

  console.log('Your results and are markers are:');
  console.log('Player 1\'s username is: ' + result.username1);
  console.log('Player 1\'s marker is: ' + result.marker1);
  console.log('Player 2\'s username is: ' + result.username2);
  console.log('Player 2\'s marker is: ' + result.marker2);

  console.log(result.player1Input);
  printBoard()
});

// printBoard();

var player1Input;

prompt.start();
// create function that accepts user input
prompt.get(['player1Input'], function (err, result) {
  console.log(result.player1Input);
  // board[result.player1Input] = marker1;
  // printBoard();
});

// create function to validate user input

// create function that uses validation function and placing function

// create list of winning combinations

// create a function that checks the board if there's a winning combination
