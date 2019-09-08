var setZeroes = function(matrix) {
  if (matrix.length === 0) return [];
  
  let firstColHasZero = false;
  let firstRowHasZero = false;
  
  for (let row = 0; row < matrix[0].length; row++) {
    if (matrix[0][row] === 0) {
      firstRowHasZero = true;
    }
  }
  
  for (let col = 0; col < matrix.length; col++) {
    if (matrix[col][0] === 0) {
      firstColHasZero = true;
    }
  }
  
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    } 
  }
  
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    } 
  }
  
  if (firstColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  
  if (firstRowHasZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
};


module.exports = setZeroes;
