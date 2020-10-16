var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

const recursiveAdd = (node,newNode) => {
  if(node.value === newNode.value) return null;
  if(newNode.value < node.value) {
    if(node.left == null) {
      node.left = newNode;
      return;
    }
    recursiveAdd(node.left,newNode);
  }
  else {
    if(node.right == null) {
      node.right = newNode;
      return;
    }
    recursiveAdd(node.right,newNode);
  }
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = function(val) {
    const node = new Node(val);
    if(this.root == null) {
      this.root = node;
    }
    else {
      recursiveAdd(this.root,node);
    }
  }
  // Only change code above this line
}

const tree = new BinarySearchTree();

tree.add(1);
tree.add(2);
tree.add(3);
displayTree(tree);
