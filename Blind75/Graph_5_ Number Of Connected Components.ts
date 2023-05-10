// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph
// Number Of Connected Components in An Undirected Graph
// https://leetcode.com/problems/number-of-provinces/
// Number of Provinces

function findCircleNum(isConnected: number[][]): number {
  let len = isConnected.length;
  const roots = new Array(len).fill(null).map((el, i) => i);
  const ranks = new Array(len).fill(1);

  function find(cur) {
    while (cur != roots[cur]) {
      roots[cur] = roots[roots[cur]]; // makes tree shorter, do nothing if doesn't exist
      cur = roots[cur];
    }
    return cur;
  }

  function union(n1, n2) {
    n1 = find(n1);
    n2 = find(n2);

    if (n1 === n2) return 0;

    if (ranks[n2] > ranks[n1]) {
      roots[n1] = n2;
      ranks[n2] += ranks[n1];
    } else {
      roots[n2] = n1;
      ranks[n1] += ranks[n2];
    }
    return 1;
  }

  let res = len;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (isConnected[i][j]) {
        res -= union(i, j);
      }
    }
  }

  return res;
} // T:O(n^2 α(n)) S:O(n)
// n^2 for main loop
// find is O(α(n)) is very close to O(1)
// union is O(n-1)
// O(n α(n)) union + find
// O(n^3) if graph is fully connected
// O(n^2) if not
