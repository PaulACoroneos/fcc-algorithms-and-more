function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line
  this.removeAt = function(idx) {
    let ptr = head;
    let cnt = 0;
    if(idx < 0 || idx >= length || head ===null ) return null;
    else if (idx ===0) {
      const removed = head;
      head = null;
      length = 0;
      return removed.element;
    }
    else {
      while(cnt < idx-1) {
        ptr = ptr.next
        cnt++;
      }
      const removedPtr = ptr.next;
      ptr.next =ptr?.next?.next;
      length--;
      return removedPtr.element;
    }
  }
  // Only change code above this line
}

const ll = new LinkedList();

ll.add(1);
console.log('removed',ll.removeAt(0),ll.head());
ll.add(1);
ll.add(2);
ll.add(3);
console.log(ll.head());
console.log('removed',ll.removeAt(2));
console.log(ll.head());