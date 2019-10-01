var search = function(nums, target) {
  if (nums.length === 1 && nums[0] === target) return 0;
  let l = 0;
  let r = nums.length-1;
  let m, lValue, rValue, mValue;
  
  while (l < r) {
      m = Math.floor((l+r) / 2);
      lValue = nums[l];
      rValue = nums[r];
      mValue = nums[m];
      if (lValue === target) return l;
      if (mValue === target) return m;
      if (rValue === target) return r;
      if (l+1 === r 
          && nums[l] !== target 
          && nums[r] !== target) break;
      if (mValue > lValue) {
          if (!(mValue >= target && lValue <= target)) {
              l = m;
          } else {
              r = m;
          }
      }
      if (mValue < rValue) {
          if (!(mValue <= target && rValue >= target)) {
              r = m;
          } else {
              l = m;
          }
      }

  }
  return -1;
};

module.exports = search;
