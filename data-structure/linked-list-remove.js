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

  this.remove = function(element){
    // Only change code below this line
    let ptr = head;
    if(ptr.element === element) {
      head = head.next;
      length--;
    }
    else {
      while(ptr.next != null) {
        if(ptr.next.element === element) {
          ptr.next = ptr.next.next;
          length--;
          return;
        }
        else {
          ptr = ptr.next;
        }
      }
    }
    // Only change code above this line
  };
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
console.log(ll.head())
ll.remove(2)
console.log(ll.head())
ll.remove(4)
