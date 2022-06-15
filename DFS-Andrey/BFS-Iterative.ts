console.clear();

(() => {
  // Create a tree from array
  class Node {
    val = Number;
    left = Node;
    right = Node;

    constructor(val) {
      this.val = val;
    }
  }

  function arrayToTree(array) {
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

      fillTheTree(node.left, i + 1);
      fillTheTree(node.right, i + 2);
    })(root, 0);

    return root;
  }

  let array = [1, 7, 0, 7, -8, null, null];
  console.log(array);

  const tree = arrayToTree(array);
  console.log("tree", tree);

  let sumBFS = (function BFS(root) {
    const queue = [root];
    let sum = 0;

    while (queue.length) {
      let el = queue.shift();
      if (el.val != null) {
        sum += el.val;
      }

      el.left && queue.push(el.left);
      el.right && queue.push(el.right);
    }

    return sum;
  })(tree);
  console.log("BFS sum", sumBFS);
})();
