var lowestCommonAncestor = function(root, p, q) {
  let lca = root;
  let pVal = p.val;
  let qVal = q.val;
  lca = dfs(lca, pVal, qVal);
  
  function dfs(root, p, q) {
      if (!root) return lca;
      
      if (root.val < qVal && root.val < pVal) {
          lca = dfs(root.right, lca, pVal, qVal)
      } else if (root.val > qVal && root.val > pVal) {
          lca = dfs(root.left, lca, pVal, qVal)
      } else {
          lca = root;
      }
      return lca;
  }

  return lca
};

module.exports = lowestCommonAncestor;
