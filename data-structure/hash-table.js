var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line

  this.add = function(key,val) {
    const hashVal = hash(key);
    this.collection[hashVal] = val;
  };

  this.remove = function(key) {
    const hashVal = hash(key);
    delete this.collection[hashVal];
  };

  this.lookup = function(key) {
    const hashVal = hash(key);
    return this.collection[hashVal] || null;
  };
  // change code above this line
};

const hashTable = new HashTable();
hashTable.add(1,2);
console.log(hashTable);