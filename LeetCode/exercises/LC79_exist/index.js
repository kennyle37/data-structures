var exist = function(board, word) {
  let found = false;
  
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === word[0]) {
        dfs(row, col, 0, board);
      }
    }
  }
  
  function dfs(row, col, count, board) {
    if (count === word.length) {
      found = true;
      return;
    }
    
    if (row < 0 || row >= board.length || col < 0 || col >= board[row].length || word[count] !== board[row][col] || found) {
      return;
    }
    
    let currentLetter = board[row][col];
    board[row][col] = "visited"
    
    dfs(row-1, col, count+1, board);
    dfs(row+1, col, count+1, board);
    dfs(row, col+1, count+1, board);
    dfs(row, col-1, count+1, board);
    
    board[row][col] = currentLetter;
  }
  
  return found;
};

module.exports = exist;
