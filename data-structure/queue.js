function Queue() {
  var collection = {};
  var start = 0;
  var end = 0;

  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function(val) {
    collection[end++] = val;
  }

  this.dequeue = function() {
    return collection[start++];
  }

  this.size = function() {
    return end-start;
  }

  this.front = function() {
    return collection[start];
  }

  this.isEmpty = function () {
    return this.size === 0;
  }
  // Only change code above this line
}
