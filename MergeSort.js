/*
  deconstruct everything down and then merge them back together when they are sorted

  need a function that will merge two sorted array into one sorted array

  need to run our merge recursively until we are merged
    run it at the center
    left
    right
    final merge
*/

/*
  have two pointers for arr1 and arr2

  while they are both not at the end
    compare value in arr1 with arr2, if arr1 is smaller or equal, we want to push that value inside our storage and then increment pointer 1

    if arr2 is bigger, want want to push p2 value inside our storage and increment pointer 2

  while p1 is at the end and p2 is not
    push everything inside p2 into our storage
    increment p2

  while p2 is at the end and p1 is not
    push everything inside p1 into our storage
    increment p1

  return storage
*/

const merge = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let storage = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      storage.push(arr1[p1]);
      p1++;
    } else if (arr1[p1] > arr2[p2]) {
      storage.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 === arr1.length && p2 < arr2.length) {
    storage.push(arr2[p2]);
    p2++;
  }

  while (p2 === arr2.length && p1 < arr1.length) {
    storage.push(arr1[p1]);
    p1++;
  }

  return storage;
}

// let arr = [1,5,7,10];
// let arr2 = [4,9,10] 
// console.log(merge(arr,arr2)); // [1,4,5,7,9,10]

/*
  we want to return our merge sort if our length is 1
  we want to keep deconstructoring the left side until there is one element, then merge it back up sorted
  we want to do the same for the irght side until there is on element, then merge it back up

  then we want to merge the two halves
  return the arr
*/

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let arr3 = [29,5,2,40,3,4];
console.log(mergeSort(arr3)) //[2,3,4,5,29,40]