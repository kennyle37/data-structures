var isValidBST = function(root) {
  let branch = '';
  let min = null;
  let max = null;
  isBst = true;
  bst(root, branch, min, max);
  return isBst;

  function bst(root, branch, min, max) {
    if (!root) return;
    if (!isBst) return;

    if (branch === 'left') {
      if (root.val >= max || root.val <= min && min !== null) {
        isBst = false;
        return;
      }
    };

    if (branch === 'right') {
      if (root.val <= min || root.val >= max && max !== null) {
        isBst = false;
        return;
      }
    };
    
    if (root.left) {
      let maxCopy = max;
      max = root.val;
      bst(root.left, branch='left', min, max);
      max = maxCopy;
    }

    if (root.right) {
      let minCopy = min;
      min = root.val;
      bst(root.right, branch='right', min, max);
      min = minCopy;
    }
  }
};

module.exports = isValidBST;
