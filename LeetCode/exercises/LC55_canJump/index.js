var canJump = function(nums) {
  if (nums.length === 0) return false;
  if (nums.length === 1) return true;
  if (nums.length === 2 && nums[0] >= 1) return true;
  nums[nums.length-1] = true;
  let idx = nums.length-2;
  let current, path, canReach;
  
  for (idx; idx >= 0; idx--) {
      current = nums[idx];
      if (current + idx >= nums.length-1) {
          nums[idx] = true;
      } else {
          path = nums.slice(idx+1, idx+current+1);
          canReach = path.some(value => {
              return value === true
          })
          nums[idx] = canReach;
      }
  }
  return nums[0];
};


module.exports = canJump;
