console.clear();
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    // take easy win first
    let node = new Node(val);
    if (this.root == null) {
      this.root = node;
      return this;
    }
    // take other cases
    let tmp = this.root;
    while (true) {
      if (node.val === tmp.val) return this;
      if (node.val < tmp.val) {
        // coner case first
        // easy win first
        if (tmp.left == null) {
          tmp.left = node;
          return this;
        }
        tmp = tmp.left;
        continue;
      }
      if (tmp.right == null) {
        tmp.right = node;
        return this;
      }
      tmp = tmp.right;
    }
    return this;
  }
  find(val) {
    if (this.root == null) {
      this.root = node;
      return false;
    }
    let tmp = this.root;
    while (tmp !== null) {
      if (tmp.val === val) return true;
      if (val < tmp.val) {
        // easy win first
        tmp = tmp.left;
        continue;
      }
      tmp = tmp.right;
    }
    // check object not to be null of ?
    if (tmp && tmp.val === val) return true;
    return false;
  }
  BFS() {
    // easy win first
    if (this.root == null) return null;
    // Here initialy were 2 arrays
    // Howereer I replaced arrays with singlt queue data
    // Also I moved this variable outside the loop to save memory
    let tmp,
      data = [],
      queue = [this.root];
    // lenght again
    while (queue.length > 0) {
      tmp = queue.shift();
      data.push(tmp);
      console.log(tmp.val);
      tmp.left && queue.push(tmp.left);
      tmp.right && queue.push(tmp.right);
    }
    return data;
  }
  DFS_PRE_ORDER() {
    let data = [],
      helper = node => {
        if (node == null) return;
        let value = node.val;
        data.push(value);
        console.log(value);
        helper(node.left);
        helper(node.right);
      };
    // remember to call helper function
    helper(this.root);
    // Also remember to return the value
    return data;
  }
  DFS_POST_ORDER() {
    let data = [],
      helper = node => {
        if (node == null) return;
        helper(node.left);
        helper(node.right);
        let tmp = node.val;
        data.push(tmp);
        console.log(tmp);
      };
    helper(this.root);
    return data;
  }
  DFS_IN_ORDER() {
    let data = [],
      helper = node => {
        if (node == null) return;
        helper(node.left);
        let tmp = node.val;
        data.push(tmp);
        console.log(tmp);
        helper(node.right);
      };
    helper(this.root);
    return data;
  }
}

//        10
//      6    15
//   3    8     20

let bst = new BST();
console.log("--- INSERT");
bst
  .insert(10)
  .insert(6)
  .insert(15)
  .insert(3)
  .insert(8)
  .insert(20);
console.log(bst.root);
console.log("--- FIND");
console.log(bst.find(10));
console.log(bst.find(3));
console.log(bst.find(99));
console.log("--- BFS");
bst.BFS();
console.log("--- DFS PRE_ORDER");
bst.DFS_PRE_ORDER();
console.log("--- DFS POST_ORDER");
bst.DFS_POST_ORDER();
console.log("--- DFS IN_ORDER");
bst.DFS_IN_ORDER();
