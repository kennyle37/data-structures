var hasCycle = function(head) {
  if (head === null) return false;
  if (head && head.next === null) return false;
  
  let fast = head.next.next;
  let slow = head;
  
  while (fast) {
      if (fast === slow) {
          return true;
      }
      if (fast.next === null) {
          return false;
      }
      fast = fast.next.next;
      slow = slow.next;
  }
  
  return false;
};

module.exports = hasCycle;
