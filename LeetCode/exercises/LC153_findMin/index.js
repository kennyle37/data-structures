var findMin = function(nums) {
  if (nums.length === 1) return nums[0];
  if (nums[0] < nums[nums.length-1]) return nums[0];
  let left = 0;
  let right = nums.length-1;
  let mid, leftValue, rightValue, midValue;
  
  while (left < right) {
      mid = Math.floor((left+right) / 2);
      leftValue = nums[left];
      rightValue = nums[right];
      midValue = nums[mid];
      
      if (nums[mid+1] < midValue) return nums[mid+1];
      if (nums[mid-1] > midValue) return midValue;
      if (midValue > leftValue) {
          left = mid;
      }
      if (midValue < rightValue) {
          right = mid;
      }
  }
};

module.exports = findMin;
