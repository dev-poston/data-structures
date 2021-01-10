//   path: [1, 2, 6, 4]
//   distance: 0 + 1 + 4 + 2
//{
//   1: [{2: 1}],
//   2: [{1: 1}, {6: 4}, {4: 2}],
//   4: [{2: 2}, {6: 2}],
//   6: [{2: 4}, {4: 2}]
// }

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (key in this.storage) {
    if (this.storage[key] === this.storage[node]) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var key in this.storage) {
    for (var i = 0; i < this.storage[key].length; i++) {
      if (this.storage[key][i][node]) {
        delete this.storage[key][i];
      }
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    for (var key in this.storage[fromNode][i]) {
      if (this.storage[fromNode][i][key] === this.storage[fromNode][i][toNode]) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var distance = Math.abs(fromNode - toNode);

  var edgeFrom = {};
  edgeFrom[fromNode] = distance;
  var edgeTo = {};
  edgeTo[toNode] = distance;

  this.storage[fromNode].push(edgeTo);
  this.storage[toNode].push(edgeFrom);
  //console.log(this);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    for (var key in this.storage[fromNode][i]) {
      if (this.storage[fromNode][i][key] === this.storage[fromNode][i][toNode]) {
        delete this.storage[fromNode][i];
      }
    }
  }
  for (var i = 0; i < this.storage[toNode].length; i++) {
    for (var key in this.storage[toNode][i]) {
      if (this.storage[toNode][i][key] === this.storage[toNode][i][fromNode]) {
        delete this.storage[toNode][i];
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

// added functions to find weight of edge and find shortest path
Graph.prototype.findWeight = function(fromNode, toNode) {
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i][toNode]) {
      return this.storage[fromNode][i][toNode];
    }
  }
};
//   var route = {};????
//   path: [1, 2, 6, 4]
//   distance: 0 + 1 + 4 + 2

//  {
//   1: [{2: 1}],
//   2: [{1: 1}, {6: 4}, {4: 2}],
//   4: [{2: 2}, {6: 2}],
//   6: [{2: 4}, {4: 2}]
//  }


Graph.prototype.shortestPath = function(fromNode, toNode) {
  // input is starting point and ending point
  // create path array w starting point
  // create distance number
  // create temp distance
  // create temp path arr

  // create inner func
  // iterate over fromNode edges
  // if weve reathed end of array
  // return path
  // else
  // if current edge key is included in path, continue
  // if current edge key is equal to toNode
  //  push key to path
  //  add value weight to distance
  //    if temp distance < master distance
  //    master distance = temp
  //    else, call inner func on current key
  // return path

  //  {
  //   1: [{2: 1}],
  //   2: [{1: 1}, {6: 4}, {4: 2}],
  //   4: [{2: 2}, {6: 2}],
  //   6: [{2: 4}, {4: 2}]
  //  }
  //shortestPath(1, 4)--> [1, 2, 4];

  var distance = +Infinity;
  var path = [fromNode];
  var tempDistance = +Infinity;
  var tempPath = [fromNode];

  for (var prop in this.storage) {
    for (var i = 0; i < this.storage[prop].length; i++) {
      for (var key in this.storage[prop][i]) {
        if (tempPath.includes(parseInt(key))) {
          continue;
        } else if (parseInt(key) === toNode) {
          if (tempDistance < distance) {
            path = tempPath;
            distance = tempDistance;
            tempPath = tempPath.slice(0, this.storage[prop][i]);
            tempDistance = 0;
          }
        } else {
          tempPath.push(parseInt(key));
          if (tempDistance === +Infinity) {
            tempDistance = this.storage[prop][i][key];
          } else {
            tempDistance += this.storage[prop][i][key];
          }
        }
      }
    }
  }
  return path;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */