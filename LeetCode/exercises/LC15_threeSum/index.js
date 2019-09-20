var threeSum = function(nums) {
  let res = [];
  let left = 0;
  let right = nums.length-1;
  let leftValue, rightValue, current, total;
  nums.sort((a,b) => a-b);
  
  for (let i = 0; i < nums.length-2; i++) {
      if (nums[i-1] === nums[i]) continue;
      left = i+1;
      right = nums.length-1;
      current = nums[i];

      while (left < right) {
          leftValue = nums[left];
          rightValue = nums[right];
          total = leftValue+rightValue+current;

          if (left-1 !== i && nums[left-1] === leftValue) {
              left++;
              continue;
          }
          if (nums[right+1] === nums[right]) {
              right--;
              continue;
          }
          if (total === 0) {
              res.push([current, leftValue, rightValue]);
          } 
          if (total <= 0) {
              left++;
          } else {
              right--;
          }
      }
  }

  return res;
};

module.exports = threeSum;
