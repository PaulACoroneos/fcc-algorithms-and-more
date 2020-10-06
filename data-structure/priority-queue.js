function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(val) {
    if(this.isEmpty()) return this.collection.push(val);
    
    for(let i=0; i< this.size(); i++) {
      if( this.collection[i][1] > val[1]) {
            return this.collection.splice(i,0,val);
      }
    }
    this.collection.push(val);
  };

  this.dequeue = function () {
    return this.isEmpty() ?  null : this.collection.shift()[0];
  };

  this.front = function() {
    return this.collection[0][0];
  };

  this.size = function() {
    return this.collection.length;
  };

  this.isEmpty = function() {
    return this.size() === 0;
  };
  // Only change code above this line
}
const queue = new PriorityQueue();
queue.enqueue(['hello',1]);
console.log(queue.size())
queue.printCollection();
queue.dequeue()
queue.printCollection();
console.log(queue.size())
queue.enqueue(['hello',1]);
queue.enqueue(['bye',2]);
queue.enqueue(['bye bye',2]);
queue.printCollection();
console.log('front',queue.front());
queue.dequeue()
queue.printCollection();
