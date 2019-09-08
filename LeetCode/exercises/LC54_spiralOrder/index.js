var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  let res = [];
  let top = 0;
  let bottom = matrix.length-1;
  let left = 0;
  let right = matrix[0].length-1; //3
  let dir = 'right' //left, right, down, up

  while (top <= bottom && left <= right) {
    if (dir === 'right') {
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
      top++;
      dir = 'down';
    } 
    
    else if (dir === 'down') {
        for (let j = top; j <= bottom; j++) {
          res.push(matrix[j][right]);
        }
        right--;
        dir ='left';
    } 
    
    else if (dir === 'left') {
        for (let k = right; k >= left; k--) {
          res.push(matrix[bottom][k])
        }
        bottom--;
        dir = 'up';
    } 
    
    else if (dir === 'up') {
        for (let l = bottom; l >= top; l--) {
          res.push(matrix[l][left])
        }
      left++;
      dir = 'right';
    }
  }
    
  return res;
}

module.exports = spiralOrder;
