var isSameTree = function(p, q) {
  let isSame = true;
  dfs(p, q);
  return isSame;

  function dfs(left, right) {
    if (!isSame) {
      return;
    }
    if (!left && !right) {
      return;
    }
    
    if (left === null && right || left && right === null) {
      isSame = false;
      return;
    }

    if ( left.val !== right.val
      || left.left && !right.left 
      || left.right && !right.right 
    ) {
      isSame = false;
      return;
    }

    dfs(left.left, right.left);
    dfs(left.right, right.right);
  }
};

module.exports = isSameTree;
