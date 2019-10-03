var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  var curA = headA;
  var curB = headB;
  while (curA !== curB) {
      curA = curA === null ? headB : curA.next;
      curB = curB === null ? headA : curB.next;
  }
  return curA;
}

module.exports = getIntersectionNode;
