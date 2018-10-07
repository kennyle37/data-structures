var Set = function() {
    let items = Object.create(Set.prototype);
  
    return items;
  }
  
  Set.prototype.has = function(value) {
    return this.hasOwnProperty(value);
  };
  
  Set.prototype.add = function(value) {
    if (!this.has(value)) {
      this[value] = value;
      return true;
    }
    return false;
  }
  
  Set.prototype.delete = function(value) {
    if (this.has(value)) {
      delete this[value];
      return true;
    }
    return false;
  }
  
  Set.prototype.clear = function() {
    for (var key in this) {
      delete this[key];
    }
  }
  
  Set.prototype.size = function() {
    return Object.keys(this).length;
  }
  
  Set.prototype.values = function() {
    let values = [];
    for (let i = 0, keys=Object.keys(this); i<keys.length; i++) {
      values.push(this[keys[i]]);
    }
    return values;
  };
  
  //Given two sets, this returns a new set with elements from both the given sets
  Set.prototype.union = function(otherSet) {
    let storage = new Set();
    
    let values = this.values();
    //loop through first set and add to storage
    // for (let i = 0; i < values.length; i++) {
    //   storage.add(values[i]);
    // };
    for (let key in values) {
      storage.add(values[key])
    }
  
    //loop through second set and add to storage
    values = otherSet.values();
    for (let item in values) {
      storage.add(values[item])
    }
  
    return storage;
  }
  
  //Given two sets, this returns a new set with the elements that exists in both sets
  Set.prototype.intersection = function(otherSet) {
    let storage = new Set();
  
    let values = this.values();
    //condition to check to see if the second set has the values from the first set
    for (let item in values) {
      if (otherSet.has(values[item])) {
        storage.add(values[item]);
      }
    }
    return storage;
  }
  
  //Given two sets, this return a new set with all the elements that exists in the 
  //first set and do not exist in the second set
  Set.prototype.difference = function(otherSet) {
    let storage = new Set();
  
    let values = this.values();
    //condition to check to see if the element exists in the first set but not the second
    //loop through the entire first set
      //if the item does not exist in the second set
        //add it to storage
  
    for (let item in values) {
      if (!otherSet.has(values[item])) {
        storage.add(values[item]);
      }
    }
  
    return storage;
  }
  
  //For every item that exists in A, it also need to exists in B
  Set.prototype.subset = function(otherSet) {
    //confirm first set is bigger than second set
    //loop through the first set
      //if the item does not exists in set b
        //return false
    //return true
  
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let item in values) {
        if (!otherSet.has(values(item))) {
          return false;
        }
      }
      return true;
    }
  }
  
  let set = new Set();
  let setA = new Set();
  setA.add(1);
  setA.add(2);
  setA.add(3);
  let setB = new Set();
  setB.add(2);
  setB.add(3);
  setB.add(4);
  setB.add(5);
  setB.add(6);
  console.log(setA.difference(setB));