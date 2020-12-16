var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.size = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size] = value;
    this.size++;
  },
  pop: function() {
    if (this.size > 0) {
      var topper = this.storage[this.size];
      delete this.storage[this.size];
      this.size--;
      return topper;
    }
  },
  size: function() {
    return this.size;
  }
};