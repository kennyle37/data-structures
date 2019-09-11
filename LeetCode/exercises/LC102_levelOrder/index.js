var levelOrder = function(root) {
  let res = [];
  let resFiltered = [];
  let resFilteredTemp = [];
  let queueTemp = [];
  let queue = [];
  let i = 0;

  if (!root) {
    return res;
  }

  queue.push(root);
  resFiltered.push(root.val);

  while (queue.length > 0) {
    if (queue[i].left) {
      queueTemp.push(queue[i].left);
      resFilteredTemp.push(queue[i].left.val);
    }
    if (queue[i].right) {
      queueTemp.push(queue[i].right);
      resFilteredTemp.push(queue[i].right.val);
    }
    if (i === queue.length-1) {
      res.push(resFiltered.slice());
      queue = queueTemp.slice();
      resFiltered = resFilteredTemp.slice();
      queueTemp = [];
      resFilteredTemp = [];
      i = 0;
    } else {
      i++;
    } 
  }
  return res;
};


module.exports = levelOrder;
