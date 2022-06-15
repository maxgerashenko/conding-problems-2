// https://levelup.gitconnected.com/how-to-traverse-a-tree-using-javascript-c9a79826e819
console.clear();

(() => {
  class Node {
    val = Number;
    left = Node;
    right = Node;

    constructor(val) {
      this.val = val;
    }
  }

  let array = [20, 15, 25, 13, 18, , 30];
  let tree = {};

  // Create a tree from array
  (array => {
    const root = new Node(null);
    if (!array || !array.length) return root;

    root.val = array[0];

    (function fillTheTree(node, i) {
      if (!node) return;

      let leftValue = array[i * 2 + 1];
      let rightValue = array[i * 2 + 2];

      const left = leftValue == null ? null : new Node(leftValue);
      const right = rightValue == null ? null : new Node(rightValue);

      node.left = left;
      node.right = right;

      fillTheTree(node.left, i * 2 + 1);
      fillTheTree(node.right, i * 2 + 2);
    })(root, 0);

    tree = root;
  })(array);

  // https://levelup.gitconnected.com/how-to-traverse-a-tree-using-javascript-c9a79826e819
  console.log(array);
  console.log("tree", tree);

  // DFS PRE ORDER
  // Bottom -> Left -> Right
  console.log("                    20, 15, 13, 18 ,25 ,30");
  (function DFSPre(root) {
    if (!root) return [];

    const res = [],
      stack = [root];

    while (stack.length) {
      let node = stack.pop(),
        { val, right, left } = node;

      // ready to print
      res.push(val);

      // put right to the stack first
      right && stack.push(right);

      // left will be first when we get from the stack;
      left && stack.push(left);
    }

    console.log("DFS PreOrder", res);
  })({ ...tree });

  // DFS POST ORDER
  // Left -> Right -> Top
  // https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/how-to-traverse-in-a-tree-postorder-13146c73f47dcf88.png
  console.log("                     13, 18, 15, 30 ,25 ,20");
  (function DFSPost(root) {
    if (!root) return [];

    const res = [],
      stack = [{ node: root }];

    while (stack.length) {
      let { node, visited } = stack.pop();

      if (!node) {
        continue;
      }
      let { val, left, right } = node;
      visited
        ? res.push(val)
        : stack.push(
            ...[{ node, visited: true }, { node: right }, { node: left }]
          );
    }

    console.log("DFS PostOrder", res);
  })({ ...tree });

  // DFS IN ORDER
  // Bottom -> Left -> Top -> Right
  // https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techiedelight.com%2Finorder-tree-traversal-iterative-recursive%2F&psig=AOvVaw2aJghaaT75guFSIQItvCb2&ust=1619059038744000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiuk4qnjvACFQAAAAAdAAAAABAt
  console.log("                    13, 15, 18, 20, 25, 30");
  (function DFSInOrder(root) {
    if (!root) return [];

    const res = [],
      stack = [{ node: root }];

    // stack
    // while
    // if null continue
    // if visited print
    // if not push right node left

    while (stack.length) {
      let { node, visited } = stack.pop();

      if (!node) continue;

      let { val, right, left } = node;
      visited
        ? res.push(val)
        : stack.push(
            ...[{ node: right }, { node, visited: true }, { node: left }]
          );
    }

    console.log("DFS IN ORDER", res);
  })({ ...tree });
})();
