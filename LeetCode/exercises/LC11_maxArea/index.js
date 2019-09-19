var maxArea = function(height) {
  let largestArea = 0;
  let left = 0;
  let right = height.length-1;
  let leftValue, rightValue, containerWidth, containerHeight, currentContainerSize;
  
  while (left < right) {
      leftValue = height[left];
      rightValue = height[right];
      containerWidth = right-left;
      containerHeight = Math.min(leftValue, rightValue);
      currentContainerSize = containerWidth*containerHeight;
      largestArea = Math.max(currentContainerSize, largestArea);
      
      if (leftValue < rightValue) {
          left++;
      } else {
          right--;
      }
  } 
  
  return largestArea;
};
module.exports = maxArea;
