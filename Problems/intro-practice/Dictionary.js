var Dictionary = function() {
    let items = Object.create(Dictionary.prototype);
  
    return items;
  }
  
  //returns true if the key exists
  Dictionary.prototype.has = function(key) {
    return key in this;
  }
  
  //adds a new item to the dictionary
  Dictionary.prototype.set = function(key, value) {
    this[key] = value;
  }
  
  //removes the key from the dictionary
  Dictionary.prototype.delete = function(key) {
    delete this[key];
  }
  
  //return specific value searched by the key
  Dictionary.prototype.get = function(key) {
    return this.has(key) ? this[key] : undefined;
  }
  
  //remove all items from the dictionary
  Dictionary.prototype.clear = function() {
    for (let key in this) {
      delete this[key];
    }
  }
  
  //return how many element the library contain
  Dictionary.prototype.size = function() {
    return Object.keys(this).length;
  }
  
  //return an array of all the keys
  Dictionary.prototype.keys = function() {
    return Object.keys(this);
  }
  
  //return an array of all the values in the dictionary
  Dictionary.prototype.values = function() {
    return Object.values(this);
  }
  
  let dictionary = new Dictionary();
  dictionary.set('kenny', 6);
  dictionary.set('tong', 5);
  dictionary.set('tong1', 5);
  dictionary.set('tong2', 5);
  console.log(dictionary.values())