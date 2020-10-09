function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    const node = new Node(element);
    let ptr = head;
    if(ptr == null) head = node;
    else {
      while(ptr.next != null) {
        ptr = ptr.next;
      }
      ptr.next = node;
    }
    length++;
    // Only change code above this line
  };
}
