var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.inorder = function(node = this.root,arr = []) {

    if (node === null) return null;

    this.inorder(node.left,arr)
    arr.push(node.value);
    this.inorder(node.right,arr)

    return arr;
    
  }

  this.preorder = function(node = this.root,arr = []) {
    displayTree(node)
    if (node === null) return null;
    arr.push(node.value);
    this.preorder(node.left,arr)
    this.preorder(node.right,arr)
    console.log('finished',arr)
    return arr;
  }

  this.postorder = function(node = this.root,arr = []) {
    if (node === null) return null;

    this.postorder(node.left,arr)
    this.postorder(node.right,arr)
    arr.push(node.value);

      return arr;

  }
  // Only change code above this line
}
