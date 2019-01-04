//swap function
function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

//selection sort function
//always quadratic (2 for loops)
//while it loops through, it stores the index of the min (maybe hashmap?), then when it reaches the end, it swaps with the biggest number

/*
  expected result
  [5,8,2,4,3] -> [2,3,4,5,8]

  loop process
  [5,8,2,4,3] -> [2,8,5,4,3] 
  [2,8,5,4,3] -> [2,3,5,4,8]
  [2,3,5,4,8] -> [2,3,4,5,8]
*/

function selection(array) {


  //parent loop
    //loop to the end
    //store minIndex

    //child loop
      //find the min and store its index

    //check if the new index is not the current index (the default one we stored)
      //swap them

  //return the array

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i+1; j < array.length; j++) {
      //if the value we are at is smaller than what we've stored, store it
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(array, i, minIndex);
    }
  }

  return array;
}

let myArray = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
selection(myArray); // [2,3,4,5,15,19,26,36,38,44,46,47,48,50]