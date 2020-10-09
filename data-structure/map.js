var Map = function() {
  this.collection = {};
  // change code below this line
  this.add = function(key,val) {
    this.collection[key] = val;
  }
  this.remove = function(key) {
    delete this.collection[key];
  }
  this.get = function(key) {
    return this.collection[key];
  }
  this.has = function(key) {
    return !!this.collection[key];
  }
  this.values = function() {
    return Object.values(this.collection);
  }

  this.size = function() {
    return Object.keys(this.collection).length;
  }
  this.clear = function() {
    this.collection = {};
  }
  // change code above this line
};

const map = new Map();

map.add(1,'1');

