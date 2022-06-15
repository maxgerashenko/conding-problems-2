console.clear();

// We can use true priority queue that is much faster than naive implementation
class PriorityQueue {
  constructor() {
    this.list = [];
  }
  add(node, priority) {
    this.list.unshift({ node, priority });
    // remember that sort function looking for -1
    this.list.sort((x, y) => x.priority - y.priority);
    return this;
  }
  get() {
    return this.list.shift();
  }
} // O(n*log n)

class WeightedGraph {
  constructor() {
    this.list = [];
  }
  add(node) {
    if (this.list[node] == null) this.list[node] = [];
    return this;
  }
  connect(v1, v2, dist = 0) {
    if (this.list[v1] == null) this.add(v1);
    if (this.list[v2] == null) this.add(v2);

    // in notdirected graph we do for both nodes
    this.list[v1].push({ node: v2, dist });
    this.list[v2].push({ node: v1, dist });
    return this;
  }
  // BIULD THE PATH TO RETUR TO THE END
  buildThePath(path, end) {
    let tmp = end,
      res = [];
    while (path[tmp] != null) {
      res.push(tmp);
      tmp = path[tmp];
    }
    return res;
  }
  getPath(start, end) {
    const priotityQueue = new PriorityQueue(),
      distances = {},
      path = {};

    // init
    for (let node in this.list) {
      distances[node] = node === start ? 0 : Infinity;
      priotityQueue.add(node, node === start ? 0 : Infinity);
    }
    // as long it is something to visit
    let shortest;
    while (priotityQueue.list.length > 0) {
      shortest = priotityQueue.get().node;
      if (shortest === end) return this.buildThePath(path, end);
      let isCalculated = node => shortest && distances[node] !== Infinity;
      if (isCalculated(shortest)) {
        // find peerss
        for (let nextNode of this.list[shortest]) {
          // find neigboring node
          // calculate new distances to peersing node
          let tmp = distances[shortest] + nextNode.dist,
            node = nextNode.node;
          if (tmp < distances[node]) {
            path[node] = shortest;
            priotityQueue.add(node, tmp);
            distances[node] = tmp;
          }
        }
      }
    }
  }
}

console.log("GRAPH");
let graph = new WeightedGraph();
graph
  .connect("A", "B", 4)
  .connect("A", "C", 2)
  .connect("B", "E", 3)
  .connect("C", "D", 2)
  .connect("C", "F", 4)
  .connect("D", "E", 3)
  .connect("D", "F", 1)
  .connect("E", "F", 1);

console.log(graph.getPath("A", "E"));
