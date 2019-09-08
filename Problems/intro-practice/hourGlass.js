/*
Given a 6x6 2D Array
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

We define hourglass to be a subset of values with indicis follwing this pattern
a b c
  d
e f g

Given the above example array, the 16 hourglasses are:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18

The highest hourglass value is 28 from the list
0 4 3
  1
8 6 6

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

*/

/*
    We need an row and col
    we know that the max for the row is 3 in a 16x16, and increases by arr[0].length % 3 for each addition
    we know that the max for the col is 3 in a 16x16, and increases by arr.length % 3 for each addition
    we know that the maxSum is -Infinity to start (on the chance that the number is -)

    loop until we hit the maxRow which is 3 (4 loops)

      at each of the loop, we want to loop until we hit the maxCol which is 3 (4 loops)
        we want to calculate the top
        the middle
        the bottom
        then compare that total with our max
    
    return the max
*/

function hourglassSum(arr) {
  let maxRow = 3 + arr[0].length % 3;
  let maxCol = 3 + arr.length % 3;
  let max = -Infinity;

  for (let i = 0; i <= maxCol; i++) {
      for (let j = 0; j <= maxRow; j++) {
          //top
          let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

          //mid
          sum += arr[i + 1][j + 1];

          //bot
          sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
          max = Math.max(sum, max);
      }
  }

  return max;
}
