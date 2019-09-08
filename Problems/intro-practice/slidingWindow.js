// Write a function which accepts an array of integers and a number called n. The function should calculate the max sum of n consective elements in the array.

function maxSum(arr, num) {
  /*
  I would have a max, which is the current max
  I would have a temporary max which will be whatever current number im on

  I would create the first window (with the first 2 number)
    i would set the max to this first window

  i would loop through the entire array starting from the 1st index
    i would set the temp sum to whatever max minus the 0th position, plus the next position of the window
    i would then compare the temp sum to the max sum
      if the temp sum is bigger, i would make the max sum the temp sum
  
  return the max sum
  */
  if (arr.length === 0) return null;

  let maxSum = 0,
      tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = 1; i < arr.length; i++) {
    let lastNum = arr[i-1];
    let nextNum = arr[i+(num-1)];
    tempSum = tempSum - lastNum + nextNum;

    if (tempSum > maxSum) { 
      maxSum = tempSum;
    };
  }

  return maxSum;
}

console.log(maxSum([1,2,5,2,8,1,5], 3)) //10

// max // temp
// 8       9
// 9       15
// 15      11
// 15      14
