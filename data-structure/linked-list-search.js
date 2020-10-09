function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
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
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
  this.isEmpty = function() {
    return head == null;
  }

  this.indexOf = function(val) {
    let ptr = head;
    let idx = 0;
    if(ptr.element === val) return idx;
    else {
      while(ptr.next !=null) {
        if (ptr.element === val) {
          return idx;
        }
        ptr = ptr.next;
        idx++;
      }
      return -1;
    }
  }
  this.elementAt = function(idx) {
    let ptr = head;
    let cnt = 0;
    if( idx > length) return undefined
    else if(idx === 0) return head;
    else {
      while(cnt < idx) {
        ptr = ptr.next
        cnt++;
      }
      return ptr.element;
    }
  }
  // Only change code above this line
}
