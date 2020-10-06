class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    //first check if write pointer will go past read pointer, if so return null
    if( this.queue[this.write] == null) {
      this.queue[this.write] = item;
      //second check if write is at end
      this.write = this.write > this.max ? 
        0 : this.write+=1;
      return item;
    }
    //else data would get overwritten. null
    else {
      return null;
    }
  }

  dequeue() {
    // Only change code below this line
    if(this.queue[this.read] != null) {
      const val = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = this.read > this.max ? 
        0 : this.read+=1;

      return val;
    }
    else {
      return null;
    }
    // Only change code above this line
  }
}

const queue = new CircularQueue(5);

console.log(queue.print());
queue.enqueue('hello')
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.print());