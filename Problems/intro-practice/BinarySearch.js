// Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

function search(arr, num) {
  /*
    need to have two pointers, one at the beginning, and one at the end
  
    keep searching while min is less than max
      set our midpoint to be the max plus the min/2
      check to see if the number is at the midpoint
        if it is, return the index of the midpoint
      if not in the middle, check the left side
        if the number is on the left side, return it
      else, check in the right side
        if the number is on the right side, return it
  
    return -1;
  */
    let min = 0;
    let max = arr.length - 1;
  
    while (min <= max) {
      let mid = Math.floor((max+min) / 2);
  
      //left side
      if (arr[mid] < num) {
        min = mid + 1;
      } else if (arr[mid] > num) {
        max = mid - 1;
      } else {
        return mid;
      }
    }
  
    return -1;
  }
  
  console.log(search([1,2,3,4,5,6,7], 1)) // 3
  console.log(search([1,2,3,4,5,6], 6)) // 5
  console.log(search([1,2,3,4,5,6], 11)) // -1