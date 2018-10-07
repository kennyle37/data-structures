let LinkedList = function() {
    let list = {};
    list.head = null;
    list.tail = null;
    list.length = 0;
  
    //this function finds our tail
    list.findTail = function() {
      //check to see if list is empty
      if (list.length === 0) {
        return null;
      } else {
        //loop to the end of the list
        let current = list.head;
        while (current.next !== null) {
          current = current.next;
        }
        //set tail to the last node
        list.tail = current;
        return list.tail;
      }
    }
  
    //append a node to the end of the list
    list.append = function(element) {
      //need the make a node for the element
      //need a pointer
      let node = new Node(element),
      current;
  
      // empty list case, apply directly to head
      if (list.head === null) {
        list.head = node;
      } else {
      // non-empty list case, loop to end then attach it
        current = list.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      list.length++;
    };
  
      //this function appends a node at any position
    list.appendAt = function(element, position) {
      //index to keep track of the position, current for the pointer, 
      // prev for prev node, and the node we're adding
      let index = 0, 
      current = list.head,
      prev = current,
      node = new Node(element);
  
      //check if it's out of bounds
      if (position < 0 || position > list.length) {
        console.log("Out of bounds");
        return null;
      }
  
      //case where we add in the beginning
        //connect current to our new node
        //make our new node the head
      if (position === 0) {
        node.next = current;
        list.head = node;
        return;
      } else {
      //case where we add anywhere else
        //loop to the desired location
          //connect current to our new node
          //connect prev to our new node
      
        while (index++ < position) {
          prev = current;
          current = current.next;
        }
      }
      node.next = current;
      prev.next = node;
      list.length++;
    }
  
    //remove a node
    list.remove = function(element) {
      //instantiate an empty prev pointer
      let prev = new Node(null);
  
      //case if the node we remove is at the head 
      while (list.head && list.head.element === element) {
        list.head = list.head.next;
      }
      
      //point the current to the head
      let current = list.head;
  
      //case if the node we remove is in the body
        //if it matches, point the prev to the current.next
        //if it does not match, have the prev catch up to the current.next
        //move up current
      while (current) {
        if (current.element === element) {
          prev.next = current.next;
          list.length--;
        } else {
          prev = current;
        }
        current = current.next;
      }
    }
  
    //this remove an item from a specified position
    list.removeAt = function(position) {
      //check if the position is out of bounds
      if (position < 0 || position > list.length) {
        return null;
      }
      //need to keep track of the prev node
      //need a count and initialize it at -1 to account for number offset
      //need to keep track of the current node
      let prev = new Node(null),
      count = -1, 
      current = list.head;  
  
      //check if the position is at the head
        //if it's at the head, we remove it and connect it to the next node
      if (position === 0 && list.head) {
        list.head = list.head.next;
      } else {
        //case for when we remove in the body
        while (current) {
          //increment count so now it's on target
          count++;
          if (count === position) {
            prev.next = current.next;
            list.length--;
          } else {
            prev = current;
          }
          current = current.next;
        }
      }
    }
  
    return list;
  }
  
  let Node = function(element) {
    let node = {};
    node.element = element;
    node.next = null;
    return node;
  }
  
  let list = LinkedList();
  list.append(11);
  list.append(14);
  list.appendAt(0, 1);
  console.log(list);