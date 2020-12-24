var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.counter = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.counter++;
    this.storage[this.counter] = value;
  },
  pop: function() {
    if (this.counter > 0) {
      var topper = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter--;
      return topper;
    }
  },
  size: function() {
    return this.counter;
  }
};