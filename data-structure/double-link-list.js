var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = function (val) {
    const node = new Node(val);
    if(this.head == null) {
      this.head = node;
      this.tail = node;
    }
    else {
      let ptr = this.head;
      while(ptr.next !== null) {
        ptr = ptr.next;
      }
      ptr.next = node
      ptr = ptr.next
      ptr.prev = this.tail;
      this.tail = ptr;
    }
  }

  this.remove = function (val){
    if( this.head === null) return null;
    if(this.head.data === val) {
      this.head = this.head.next;

    }
    else {
      let ptr = this.head;
      //check if its in middle of list
      while(ptr.next != null) {
        if(ptr.data === val) {
          const prev = ptr.prev;
          ptr.prev = ptr.next;
          ptr.next.prev = prev;
        }
        ptr = ptr.next;
      }
      //check end
      if(ptr.data === val) {
        this.tail = ptr.prev;
        ptr.prev.next = null;
      }
    }
  }

  this.reverse = function () {
    if(this.head == null) return null;
    this.tail = this.head;
    let ptr = this.head;
    while(ptr.next != null) {
      let next = ptr.next;
      ptr.next = ptr.prev;
      ptr.prev = next;
      ptr = next;
    }
    ptr.next = ptr.prev;
    ptr.prev = null;
    this.head = ptr;
  }
  // Only change code above this line
};

const doubly = new DoublyLinkedList();

doubly.add(1);
doubly.add(2);
doubly.add(3);
doubly.remove(1);
doubly.remove(3);
doubly.remove(2);