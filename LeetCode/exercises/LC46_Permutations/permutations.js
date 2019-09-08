var helper = function(res, temp, nums) {
  if (nums.length === 0) {
    res.push(temp.slice());
    return;
  }
  
  for (let i = 0; i < nums.length; i++) {
    temp.push(nums[i]);
    nums.splice(i, 1);
    helper(res, temp, nums);
    nums.splice(i, 0, temp.pop());
  }
}

var permute = function(nums) {
  let res = [];
  let temp = [];
  helper(res, temp, nums);
  return res;
};