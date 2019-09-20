var maxSubArray = function(nums) {
  if (nums.length === 0) return 0;
  let dp = new Array(nums.length).fill(-Infinity);
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = 1; i < nums.length; i++) {
      const current = nums[i];
      dp[i] = Math.max(current, dp[i-1] + current);
      max = Math.max(max, dp[i]);
  }
  return max;
};


module.exports = maxSubArray;
