function validSudoku(board) {
  let checkValue, currentValue;
  let top = 0;
  let left = 0;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      currentValue = board[row][col];
      if (col <= 2) {
        left = 0;
      } else if (col > 2 && col <= 5) { 
        left = 3;
      } else if (col > 5 && col <= 8 ) {
        left = 6;
      } 

      if (row <= 2) {
        top = 0;
      } else if (row > 2 && row <= 5) { 
        top = 3;
      } else if (row > 5 && row <= 8 ) {
        top = 6;
      } 

      //check the row
      for (let i = 0; i < board[row].length; i++) {
        if (i === col) continue;
        checkValue = board[row][i];
        if (checkValue === currentValue && currentValue !== '.') return false;
      }     

      //check the col
      for (let i = 0; i < board[col].length; i++) {
        if (i === row) continue;
        checkValue = board[i][col];
        if (checkValue === currentValue && currentValue !== '.') return false;

      }

      //check for the top quadrant
      if (board[top][left] === currentValue && (row !== top || col !== left) && currentValue !== "." && board[top][left] !== ".") return false;
      if (board[top][left+1] === currentValue && (row !== top || col !== left+1) && currentValue !== "." && board[top][left+1] !== ".") return false;
      if (board[top][left+2] === currentValue  && (row !== top || col !== left+2) && currentValue !== "." && board[top][left+2] !== ".") return false;

      //check for the middle quadrant
      if (board[top+1][left] === currentValue && (row !== top+1 || col !== left) && currentValue !== "." && board[top+1][left] !== ".") return false;
      if (board[top+1][left+1] === currentValue && (row !== top+1 || col !== left+1) && currentValue !== "." && board[top+1][left+1] !== ".") return false;
      if (board[top+1][left+2] === currentValue && (row !== top+1 || col !== left+2) && currentValue !== "." && board[top+1][left+2] !== ".") return false;

      //check for the bottom quadrant
      if (board[top+2][left] === currentValue && (row !== top+2 || col !== left) && currentValue !== "." && board[top+2][left] !== ".") return false;
      if (board[top+2][left+1] === currentValue && (row !== top+2 || col !== left+1) && currentValue !== "." && board[top+2][left+1] !== ".") return false;
      if (board[top+2][left+2] === currentValue && (row !== top+2 || col !== left+2) && currentValue !== "." && board[top+2][left+2] !== ".") return false;
    }
  }
  return true;
}