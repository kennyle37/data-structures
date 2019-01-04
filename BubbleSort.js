//swap function (takes in the array and two indices that we want to swap)
  //swap the element at the index position

//good to ask questions (is this a conditional?)
function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function bubbleSort(array) {
  /*
    [5,1,4,8,2] -> [1,5,4,8,2]
    [1,5,4,8,2] -> [1,4,5,8,2]
    [1,4,5,8,2] -> [1,4,5,8,2]
    [1,4,5,8,2] -> [1,4,5,2,8]

    decriment and it goes to 4

    parent loop starts at the end, and ends at the beginning (uses i)
      child loop start at the beginning, and up to the parent loop's index-1 (uses j)
        if array[j] > array[j+1]
          swap array[j] > array[j+1]
    
    return array;
  */
  let noSwap;

  for (let i = array.length-1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return array;
}

let myArray = [5,1,4,8,2];
console.log(bubbleSort([5,1,4,8,2]));