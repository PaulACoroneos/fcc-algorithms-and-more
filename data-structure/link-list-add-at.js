function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = function(idx,element) {
    if(idx < 0 || idx > length) return false;
    const newNode = new Node(element);
    if(idx === 0) {
      head = newNode;
      length++;
      return;
    }
    else {
      let cnt = 0;
      let ptr = head;
      while(cnt < idx-1) {
        ptr = ptr.next;
        cnt++;
      }
      const nextNode = ptr.next;
      ptr.next = newNode;
      newNode.next = nextNode;
      length++;
    }
  }
  // Only change code above this line
}
