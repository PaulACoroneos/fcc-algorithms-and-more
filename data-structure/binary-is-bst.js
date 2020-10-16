var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line
  if (tree == null) return true;

  if(tree.left && tree.root.value > tree.root.left.value || tree.right && tree.root.value < tree.root.right.value) return false;

  //recursively check left/right node
   if(!isBinarySearchTree(tree.left) || !isBinarySearchTree(tree.right)) return false;
  
  return true;

  // Only change code above this line
}
