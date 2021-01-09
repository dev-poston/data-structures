var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

// added function removeChild
treeMethods.removeChild = function(target) {
  var inner = function(child) {
    for (var i = 0; i < child.length; i++) {
      if (child[i].value === target) {
        child[i].value = child[i].children[0].value;
        child[i].children = child[i].children[0].children;
      } else {
        inner(child[i].children);
      }
    }
  };
  inner(this.children);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
