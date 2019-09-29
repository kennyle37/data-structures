var productExceptSelf = function(nums) {
  if (nums.length <= 1) return [];
  let dp = [];
  dp[0] = 1;
  let tmp = nums[nums.length-1];
  
  for (let i = 1; i < nums.length; i++) {
      dp[i] = dp[i-1] * nums[i-1];
  }
  
  for (let i = nums.length-2; i >= 0; i--) {
      dp[i] = dp[i] * tmp;
      tmp = tmp * nums[i];
  }
  
  return dp;
};

module.exports = productExceptSelf;
