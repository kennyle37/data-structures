var uniquePaths = function(m, n) {
  let xMax = m-1;
  let yMax = n-1;
  let grid = [];
  
  if (m === 1 && n === 1) return 1;

  for (let i = 0; i < n; i++) {
      grid.push([]);
  }
  
  for (let y = yMax; y >= 0; y--) {
      for (let x = xMax; x >= 0; x--) {
          if (x === xMax && y === yMax) {
              grid[y][x] = 0;
          } else if (y === yMax && x !== xMax) {
              grid[y][x] = 1;
          } else if (x === xMax) {
              grid[y][x] = 1;
          } else {
              grid[y][x] = grid[y+1][x] + grid[y][x+1]
          }
      }
  }

  return grid[0][0];
};


module.exports = uniquePaths;
