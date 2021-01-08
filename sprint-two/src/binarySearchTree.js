var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);
  if (this.value > value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value > value && this.left !== null) {
    return this.left.contains(value);
  } else if (this.value < value && this.right !== null) {
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
