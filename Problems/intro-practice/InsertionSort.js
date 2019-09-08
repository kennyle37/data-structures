/*
  loop through the array while keeping track of the lowest value
    each iteration we will have our lowest value be in place

  have two pointers, one for our current index and one for our discovered

  discover the first position
  have our current point to i

  while our array at current is less than our arr at dicovered
    we want to swap our discovered with our current
    we want to keep decrementing discovered and current
  
  we then want to set discovered at i
*/

function insertionSort(arr) {
  let discovered = 0;

  for (let i = 1; i < arr.length; i++) { 
    let current = i;

    while (arr[current] < arr[discovered] && discovered >= 0) {
      [arr[discovered], arr[current]] = [arr[current], arr[discovered]];
      current--;
      discovered--;
    }
    discovered = i;
  }

  return arr;
}
                          
console.log(insertionSort([3,5,38,44,47])) //[3,5,38,44,47]