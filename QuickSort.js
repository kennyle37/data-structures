/*
  quick sort sort by splitting the array down the middle and then sorting the left and the right of the pivot
  
  first we need a pivot function
    the pivot function will put the pivot number in the correct position and return its index
    the left side of the pivot position will be less than the pivot
    the right side of the pivot function will be more than the pivot
  
*/

/*
  pivot will be taking in our array, a start which will be 0, and the end of the array
  we will also need to implement a swap function for easy access

  we will point the pivot to the first value in the pivot
  we will point the start index to the start which is 0

  loop through the loop once
    if the pivot is less than the current number
      we want to increment our start and then swap that start with the current number
  
  at the end, we want to swap the pivot with the last start (which is our last lowest number)
  we want to return our start index because that is now the correct position for pivot
*/

const pivot = (arr, start=0, end=arr.length-1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  let pivot = arr[start];
  let startIdx = start;

  for (let i = start+1; i <= end; i++) {
    if (pivot > arr[i]) {
      startIdx++;
      swap(arr, startIdx, i);
    }
  }
  swap(arr, start, startIdx);
  return startIdx;
}

/*
  our merge sort will be done recursively. We will need to get back the pivot index (first correct position), and then we will sort the left section and the right section until the list is sorted

  our base case will be when the subarray is less than 2, or when the left is no longer less than the right
*/

const quickSort = (arr, left=0,right=arr.length-1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx-1);
    quickSort(arr, pivotIdx+1, right);
  }
  return arr;
}


// let arr = [10,3,5,6,20,16];
// console.log(pivot(arr))
// console.log(arr)

let arr1 = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]; 
quickSort(arr1)