var DoublyLinkedList = function() {
  let list = Object.create(DoublyLinkedList.prototype);
  list.head = null;
  list.tail = null;
  list.length = 0;

  return list;
}

var Node = function(element) {
  this.element = element;
  this.prev = null;
  this.next = null;
}

//insert an element anywhere
DoublyLinkedList.prototype.insert = function(position, element) {
  let current = this.head,
  prev,
  index = 0,
  node = new Node(element);

  //check for out of bounds
  if (position < 0 || position > this.length) {
    console.log('Out of bounds');
    return null;
  }

  //case for if we add to head
  if (position === 0) {

    //if there is currently a head
    if (!this.head) {
      this.head = node;
      this.tail = node;

    //if there is no head
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }

    //case where we add to tail
  } else if (position === this.length - 1) {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;

    //case where we add to body
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    current.prev = node;
    prev.next = node;
    node.prev = prev;
  }

  this.length++;
}

//remove the element anywhere
DoublyLinkedList.prototype.removeAt = function(position) {
  /*
    need a current pointer, need a prev pointer, need an index
  */
  let current = this.head,
  prev,
  index = 0;

  //check for out of bounds
  if (position < 0 || position > this.length - 1) {
    console.log("Out of bounds");
    return null;
  }

  //remove at the head
  if (position === 0) {
      //if there is one head only and the element
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
      //if there are two nodes
        this.head = current.next;
        this.head.prev = null;
      }
  //remove at the tail
  } else if (position === this.length - 1) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
  //remove in the body
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;
}

let list = new DoublyLinkedList();
list.insert(0, '1'); //0
list.insert(0, '2'); //0
list.removeAt(0) //
console.log(list)