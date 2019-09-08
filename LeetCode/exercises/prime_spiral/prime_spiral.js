const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;

rl.on('line', (input) => {
    var values = input.split(' ');
    var start = parseInt(values[0]);
    var end = parseInt(values[1]);
    count++;
    
    function isPrime(n) {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    }
    
    function spiral(n) {
      if (n === 0) return false;
      if (n === 1) return [[1]];
      
      let grid = [];
    
      let top = 0;
      let right = 1; 
      let bottom = 0;
      let left = 0;
    
      let direction = 'right' //left, up, down, right
      let current = 1;
      let complete = false;
      let unfinished = false;
    
      while (current <= n) {
        if (direction === 'right') {
          for (let i = 0; i <= right; i++) {
            if (current > n) {
              complete = true;
              break;
            };
            if (!grid[bottom]) {
              grid[bottom] = [];
            }
            grid[bottom].push(current);
            if (current > n) {
              complete = true;
              break;
            };
            current++;
          }
          if (!complete) {
            direction = 'up';  
          }
        } else if (direction === 'up') {
          for (let i = bottom-1; i >= 0; i--) {
            if (current > n) break;
            grid[i].push(current);
            current++;
          }
            if (current > n) {
              complete = true;
              break;
            };
          if (grid.length < grid[bottom].length) {
            grid.unshift([]);
            grid[top].push(current);
            current++;
            bottom++;
          }
            direction = 'left'
        } else if (direction === 'left') {
          for (let i = right; i >= 0; i--) {
            grid[top].unshift(current);
            current++;
            if (current > n) {
              complete = true;
              if (grid[top].length > grid[top+1].length) {
                direction = 'down'
              }
              break;
    
            };
          }
          if (!complete) {
            direction = 'down';
          }
          right = grid[top].length;
        } else if (direction === 'down') {
          for (let i = left+1; i < grid[top].length-1; i++) {
            if (current > n) {
              complete = true;
              break;
            };
            grid[i].unshift(current);
            current++;
          }
          if (!complete) {
            direction = 'right';
          }
          bottom++;
        }
      }
    
      for (let i = 1; i < grid.length; i++) {
        if (grid[i-1].length !== grid[i].length) {
          unfinished = true;
        }
      }
    
      if (unfinished) {
        switch (direction) {
          case 'up':
            for (let i = bottom-1; i >= 0; i--) {
              if (grid[i].length < grid[bottom].length) {
                grid[i].push(current);
                current++;
              }
            }
            break;
          case 'right':
            while (grid[bottom].length < grid[0].length) {
              grid[bottom].push(current);
              current++;
            }
            break;
          case 'left':
            while (grid[top].length < grid[1].length) {
              grid[top].unshift(current);
              current++;
            }
            break;
          case 'down':
            for (let i = 1; i < grid.length; i++) {
              if (grid[0].length > grid[i].length) {
                grid[i].unshift(current);
                current++;
              }
            }
            break;
        }  
      }
      return grid;
    }

    function pathfinder(start, end) {
      let grid = spiral(Math.max(start, end));
      let minSteps = Infinity;
      
      for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col] === start) {
            dfs(row, col, start, end, 0, grid)
          }
        }
      }
    
      function dfs(row, col, start, end, temp, grid) {
        if (row < 0 
        || row >= grid.length 
        || col < 0 
        || col >= grid[0].length 
        || grid[row][col] === 'visited'
        || grid[row][col] === 'prime') {
          return;
        }
    
        if (isPrime(grid[row][col])) {
          grid[row][col] = 'prime';
          return
        }
    
        if (grid[row][col] === end) {
          minSteps = Math.min(minSteps, temp);
        }
    
        let currentNumber = grid[row][col];
        grid[row][col] = 'visited'
    
        dfs(row-1, col, start, end, temp+1, grid);
        dfs(row+1, col, start, end, temp+1, grid);
        dfs(row, col+1, start, end, temp+1, grid);
        dfs(row, col-1, start, end, temp+1, grid);
    
        grid[row][col] = currentNumber;
      }
    
      return minSteps !== Infinity ? minSteps : 'Impossible';
    }
    
    console.log(`Case ${count}:`, pathfinder(start, end));
});