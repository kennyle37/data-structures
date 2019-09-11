var numIslands = function(grid) {
  if (grid.length === 0) return [];
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
          if (grid[row][col] === '1') {
              count++;
              dfs(row, col, grid);
          }
      }
  }

  function dfs(row, col, grid) {
      if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === '0') {
          return;
      }

      grid[row][col] = '0';

      dfs(row+1, col, grid);
      dfs(row-1, col, grid);
      dfs(row, col+1, grid);
      dfs(row, col-1, grid);
  }

  return count;
};

module.exports = numIslands;
