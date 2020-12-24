class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }
  push(value) {
    this.counter++;
    this.storage[this.counter] = value;
  }
  pop() {
    if (this.counter > 0) {
      var topper = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter--;
      return topper;
    }
  }
  size() {
    return this.counter;
  }

}