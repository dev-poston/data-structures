var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back++;
};
Queue.prototype.dequeue = function () {
  if (this.front < this.back) {
    var fronter = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return fronter;
  }
};
Queue.prototype.size = function () {
  return this.back - this.front;
};

