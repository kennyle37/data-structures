var reverseList = function(head) {
  if (!head) return null;
  if (head.next === null) return head;
  
  let prev = head;
  let current = prev.next;
  let next = current.next;
  
  prev.next = null;
  
  while (next) {
      current.next = prev;
      prev = current;
      current = next;
      next = next.next;
  }
  
  current.next = prev;
  head = current;
  return head;
};

module.exports = reverseList;
