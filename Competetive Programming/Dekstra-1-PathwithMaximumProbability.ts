// #0
// Path with Maximum Probability
// https://leetcode.com/problems/path-with-maximum-probability/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
  // Constraints
  // 2<=n<= 1000
  // 0<=start,end<n
  // start != end
  // 0<=a, b<n
  // 0<=edges.length , succProb.length<= 1000
  // 0<=succProb[i]<=1

  // build adjacency list
  let nodes = {};
  for (let i = 0; i < edges.length; i++) {
    let [first, second] = edges[i];

    let val = succProb[i];
    nodes[first] = !nodes[first] ? [] : nodes[first];
    nodes[second] = !nodes[second] ? [] : nodes[second];

    if (!nodes[first]) nodes[first] = [];
    nodes[first].push({ index: second, val });
    nodes[second].push({ index: first, val });
  }

  // If start or end is not in the graph, then bail out
  if (!nodes[start] || !nodes[end]) return 0;

  // init probability
  let probablity = {};
  for (let node of Object.keys(nodes)) {
    probablity[node] = node == start ? 1 : 0;
  }

  // Start search of most probable path
  let cur = start,
    priorityQueue = new PriorityquequeMax();
  while (cur !== end) {
    if (nodes[cur] && nodes[cur].visited) {
      let node = priorityQueue.get();

      // Bail out if there is no path from start to the end
      if (!node) return 0;

      let { index } = node;
      cur = index;
      continue;
    }

    for (let node of nodes[cur]) {
      let { index, val } = node;
      probablity[index] = Math.max(probablity[index], probablity[cur] * val);
      priorityQueue.add(index, probablity[index]);
    }
    nodes[cur].visited = true;
    let { index } = priorityQueue.get();
    cur = index;
  }

  return probablity[cur];
};

class PriorityquequeMax {
  queue = [];
  constructor() {}
  add(index, val) {
    this.queue.push({ index, val });

    let cur = this.queue.length - 1;
    let parent = ~~((cur - 1) / 2);
    while (this.queue[cur].val > this.queue[parent].val && cur >= 0) {
      [this.queue[cur], this.queue[parent]] = [
        this.queue[parent],
        this.queue[cur]
      ];
      cur = parent;
      parent = ~~((cur - 1) / 2);
    }
  }
  get() {
    let first_i = 0;
    let last_i = this.queue.length - 1;
    [this.queue[first_i], this.queue[last_i]] = [
      this.queue[last_i],
      this.queue[first_i]
    ];
    let max_node = this.queue.pop();

    let cur_i = 0;
    let left_val = this.queue[cur_i * 2 + 1] && this.queue[cur_i * 2 + 1].val;
    let right_val = this.queue[cur_i * 2 + 2] && this.queue[cur_i * 2 + 2].val;
    let max_i = left_val > right_val ? cur_i * 2 + 1 : cur_i * 2 + 2;
    while (
      this.queue[max_i] != null &&
      this.queue[cur_i].val < this.queue[max_i].val
    ) {
      [this.queue[cur_i], this.queue[max_i]] = [
        this.queue[max_i],
        this.queue[cur_i]
      ];
      cur_i = max_i;
      left_val = this.queue[cur_i * 2 + 1] && this.queue[cur_i * 2 + 1].val;
      right_val = this.queue[cur_i * 2 + 2] && this.queue[cur_i * 2 + 2].val;
      max_i = left_val > right_val ? cur_i * 2 + 1 : cur_i * 2 + 2;
    }
    return max_node;
  }
}
