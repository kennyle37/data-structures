var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  
  for (let i = 2; i < nums.length; i++) {
      if (nums[i-3]) {
          nums[i] = nums[i] + Math.max(nums[i-2], nums[i-3])
      } else {
          nums[i] = nums[i] + nums[i-2]
      }
  }
  
  return Math.max(nums[nums.length-1], nums[nums.length-2])
};


module.exports = rob;
