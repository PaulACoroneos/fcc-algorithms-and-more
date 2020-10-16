const recursiveSearch = (node,val) => {
  if(node.value === val) {
    return true;
  }
  else if(val > node.value && node.right) return recursiveSearch(node.right,val)
  else if(val < node.value && node.left) return recursiveSearch(node.left,val);
else return false;
}

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
this.value = value;
this.left = null;
this.right = null;
}

function BinarySearchTree() {
this.root = null;
// Only change code below this line
this.isPresent = function(val) {
if(this.root == null) return false;
return recursiveSearch(this.root,val);
// Only change code above this line
}
}