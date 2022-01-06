/**
 * Checks a bingo board for given input
 *
 * @param {Array<Array<number>>} board the 5x5 board
 * @param {number|Array<number>} The single bingo input or array of inputs
 * @return True if the bing card has a match
 * @customfunction
 */
function BINGO(board = [[1,2,3],[4,4,4],[5,6,7]], calls = [1,3,4,7]) {
  // set calls to an array if it is not already
  if (!Array.isArray(calls)) {
    calls = [calls];
  } else if (Array.isArray(calls[0])) {
    calls = calls[0];
  }
  var bingo = false;
  // check for bingo rows
  for (var i = 0; i < board.length; i++) {
    var bingoRow = true;
    var bingoCol = true;
    for (var j = 0; j < board.length; j++) {
      if (!calls.includes(board[i][j])) {
        bingoRow = false;
      }
      if (!calls.includes(board[j][i])) {
        bingoCol = false;
      }
    }
    if (bingoRow || bingoCol) {
      bingo = true;
      return bingo;
    }
  }
  return bingo;
}

/**
 * gets sum of unmarked bingo numbers
 *
 * @param {Array<Array<number>>} board the 5x5 board
 * @param {number|Array<number>} The single bingo input or array of inputs
 * @return Sum of uncalled numbers
 * @customfunction
 */
function SUMOFUNMARKED(board,calls) {
  var sum = 0;
  if (!Array.isArray(calls)) {
    calls = [calls];
  } else if (Array.isArray(calls[0])) {
    calls = calls[0];
  }
  // check for bingo rows
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (!calls.includes(board[i][j])) {
        sum += board[i][j];
      }
    }
  }
  return sum;
}

/**
 * Last Bingo Call
 *
 * @param {number|Array<number>} The single bingo input or array of inputs
 * @return last called number
 * @customfunction
 */
function LASTCALLED(calls) {
  if (!Array.isArray(calls)) {
    return calls;
  } else if (Array.isArray(calls[0])) {
    return calls[0][calls[0].length-1];
  }
}





