// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]

function twoSum(arr, target) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in hash) {
      return [i, hash[arr[i]]]
    }
    hash[target-arr[i]] = i
  }
}
module.exports = twoSum;
