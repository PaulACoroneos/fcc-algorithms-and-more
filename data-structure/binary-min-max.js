var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMin = function () {
    if(this.root == null) return null;
    let ptr = this.root;
    while(ptr.left != null) {
      ptr= ptr.left;
    }
    return ptr.value;
  }
  this.findMax = function () {
    if(this.root == null) return null;
    let ptr = this.root;
    while(ptr.right != null) {
      ptr= ptr.right;
    }
    return ptr.value;
  }
  // Only change code above this line
}
