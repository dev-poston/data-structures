var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      var old = list.tail;
      list.tail = newNode;
      old.next = newNode;
    }
  };

  list.removeHead = function() {
    var newHead = list.head;
    list.head = newHead.next;
    return newHead.value;
  };

  list.contains = function(target) {

    var hasValue = function(node) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      } else {
        return hasValue(node.next);
      }
    };
    return hasValue(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
