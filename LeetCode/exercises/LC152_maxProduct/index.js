/*
        [2,3,-2,4]
dpMax   [2,6,-2,4]
dpMin   [2,6,-12,-36]


        [-2,3,4,-2]
dpMax   [-2,3,12,48]
dpMin   [-2,-6,-24,-24]

if we are at a negative after a list of positive, 
    then the dpMax will be negative*dpMax last value
    and dpMin will be positive*dpMin last value


*/

var maxProduct = function(nums) {
  let dpMax = [];
  let dpMin = [];
  let min, max, res, current, prevMax, prevMin;
  max = nums[0];
  dpMax[0] = nums[0];
  dpMin[0] = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      current = nums[i];
      prevMax = dpMax[i-1];
      prevMin = dpMin[i-1];
      
      if (current > 0) {
          dpMax[i] = Math.max(current*prevMax, current);
          dpMin[i] = current*prevMin;
      } else if (current < 0) {
          dpMax[i] = Math.max(current*prevMin, current);
          dpMin[i] = Math.min(current*prevMax, current);
      } else {
          dpMax[i] = 0;
          dpMin[i] = 0;
      }
      max = Math.max(max, dpMax[i]);
  }
  return max;
};

module.exports = maxProduct;
