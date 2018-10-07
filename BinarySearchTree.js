const BinarySearchTree = function() {
    this.root = null;
  }
  
  //helper function for new node
  const Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  
  //helper function to check where to place node
  const nodePlacer = function(node, newNode) {
    //left case
      //case where left node does not exist
        //insert newNode into this spot
      //case where left node exists
        //run this function again with the existing node as the check
  
    //right case
      //case where right node does not exist
        //insert newNode into this spot
      //case where right node exists
        //run this function again with existing node as the check
  
      if (node.key > newNode.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          nodePlacer(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          nodePlacer(node.right, newNode);
        }
      }
  }
  
  //this insert a new key in the tree
  BinarySearchTree.prototype.insert = function(key) {
    //create a new node
  
    //check for head case
      //insert newNode into this spot
  
    //body case with helper function
      //run our helper function
  
    let node = new Node(key);
  
    if (this.root === null) {
      this.root = node;
    } else {
      nodePlacer(this.root, node);
    }
  }
  
  //This search from the smallest to the largest node
  BinarySearchTree.prototype.inOrderTraverse = function(callback) {
    const inOrderTraverseNode = function(node, callback) {
      //case where there is still a node
        //check the left side of the tree
        //check the root
        //check the right side of the tree
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    }
    inOrderTraverseNode(this.root, callback);
  }
  
  //this search the node then the descendant
  BinarySearchTree.prototype.preOrderTraverse = function(callback) {
    const preOrderTraverseNode = function(node, callback) {
      //base case to check to see if we can loop in
        //starting from the root
        //starting from the left
        //starting from the right
      if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    }
    preOrderTraverseNode(this.root, callback);
  }
  
  //this search the descentdent then the node
  BinarySearchTree.prototype.postOrderTraverse = function(callback) {
    const postOrderTraverseNode = function(node, callback) {
      //if there is no more node
        //left most case
        //right most case
        //root
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    }
    postOrderTraverseNode(this.root, callback);
  
  }
  
  //find the min
  BinarySearchTree.prototype.minFinder = function(callback) {
    let current = this.root;
  
    minNodeChecker(current, callback)
  }
  
  //helper function to find min
  const minNodeChecker = function(node, callback) {
    //pointer at the root
      //return if there is only a root
    //keep going left until there's no more
    
    if (node.left === null && node.right === null) {
      callback(node.key);
    } else {
      minNodeChecker(node.left, callback);
    }
  }
  
  //find the max
  BinarySearchTree.prototype.maxFinder = function(callback) {
    //pointer at the root
    //keep going right until there's no more
  
    let current = this.root;
  
    const maxFinderNode = function(node, callback) {
      if (node.left === null && node.right === null) {
        callback(node.key);
      } else {
        maxFinderNode(node.right, callback);
      }
    }
    maxFinderNode(current, callback);
  }
  
  //removing a node
  BinarySearchTree.prototype.remove = function(key) {
    root = removeNode(node, key);
  
    const removeNode = function(node, key) {
      //null case
      if (node === null) {
        return null 
        //look for node on left branch
      } else if (node.key > key) {
        node.left = removeNode(node.left, key);
        return node;
        //look for node on right branch
      } else if (node.key < key) {
        node.right = removeNode(node.right, key);
        return node;
        //once we reach this else condition, we have found the node we are looking for
        //we need to then check to see if it satisfy three cases
      } else {
        //case where there is no child
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        } 
        //case where there is one child
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        //case where there are two children
          //find the min value on the right subtree
          //set the min value to the current node
          //remove the min value
          //return the node
        let replacement = findMinNode(node.right);
        node.key = replacement.key;
        node.right = removeNode(node.right, replacement.key);
        return node;
      }
    }
  }
  
  const findMinNode = function(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }
  
  //find the specific value
  BinarySearchTree.prototype.valueFinder = function(key, callback) {
    //recursive case
      //if the key matches the current node return it
      //if it's on the left
      //if it's on the right
  
    let current = this.root;
  
    const valueFinderNode = function(node, callback) {
      if (node === null) {
        console.log('no found')
        return false;
      }
      if (key === node.key) {
        console.log('found!')
        callback(node.key);
      } else if (key < node.key) {
        valueFinderNode(node.left, callback);
      } else if (key > node.key) {
        valueFinderNode(node.right, callback);
      } 
    }
    
    valueFinderNode(current, callback)
  }
  
  
  
  const printNode = function(value) {
    console.log('current node is:', value);
  }
  
  let tree = new BinarySearchTree();
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);
  // tree.inOrderTraverse(printNode);
  // tree.preOrderTraverse(printNode);
  // tree.postOrderTraverse(printNode);
  // tree.minFinder(printNode); //5
  // tree.maxFinder(printNode); //20
  tree.valueFinder(20, printNode); //11
  console.log(tree)
  // console.log(tree)
  