var mergeTwoLists = function(l1, l2) {
  let dummyHead = { next: null };
  let dummyPointer = dummyHead;
  let p1 = l1;
  let p2 = l2;
  
  while (p1 && p2) {
      if (p1.val <= p2.val) {
          dummyPointer.next = new ListNode(p1.val)
          p1 = p1.next;
      } else {
          dummyPointer.next = new ListNode(p2.val)
          p2 = p2.next;
      }
      dummyPointer = dummyPointer.next;
  }
  
  while (p1 && !p2) {
      dummyPointer.next = new ListNode(p1.val)
      dummyPointer = dummyPointer.next
      p1 = p1.next;
  }
  
  while (p2 && !p1) {
      dummyPointer.next = new ListNode(p2.val) 
      dummyPointer = dummyPointer.next;
      p2 = p2.next;
  }
  
  return dummyHead.next;
};

module.exports = mergeTwoLists;
