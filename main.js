var prompt = require('prompt');

prompt.start();

  //
  // Get two properties from the user: username and email
  //

var username1, marker1, username2, marker2;

prompt.get(['username1', 'marker1', 'username2', 'marker2'], function (err, result) {
  username1 = result.username1;
  marker1 = result.market1;
  username2 = result.username2;
  marker2 = result.marker2;

  console.log('Your results and are markers are:');
  console.log('Player 1\'s username is: ' + result.username1);
  console.log('Player 1\'s marker is: ' + result.marker1);
  console.log('Player 2\'s username is: ' + result.username2);
  console.log('Player 2\'s marker is: ' + result.marker2);
});



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

// printBoard();



// create function that accepts user input


// create function to validate user input

// create function that uses validation function and placing function

// create list of winning combinations

// create a function that checks the board if there's a winning combination
