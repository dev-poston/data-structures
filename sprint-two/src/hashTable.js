

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = [];
  var tuple = {};
  tuple[k] = v;
  bucket.push(tuple);

  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][k]) {
        this._storage[index][i][k] = v;
      } else {
        this._storage[index].push(tuple);
      }
    }
  } else {
    this._storage[index] = bucket;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][k]) {
      return bucket[i][k];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][k]) {
      delete bucket[i][k];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


