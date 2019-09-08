var maxDepth = function(root) {
  if (!root) return 0;
  let maxDepth = 1;
  dfs(1, root);
  return maxDepth;

  function dfs(depth, node) {
    if (!node) return;

    maxDepth = Math.max(maxDepth, depth);

    if (node.left) {
      dfs(depth+1, node.left);
    } 
    if (node.right) {
      dfs(depth+1, node.right);
    } 
  }
};
module.exports = maxDepth;
