

// use DFS inOrder
// use iterative, not recursive
// use cur
// while go left
// use value
// go right

function kthSmallest(root: TreeNode | null, k: number): number {
    let stack = [root];
    let cur = root;

    while(cur || stack.length){
        while(cur){
            stack.push(cur)
            cur = cur.left;
        }
        cur = stack.pop();
        k--;
        if(k===0) return cur.val;
        cur = cur.right;
    }

    return -1;
}; // T:O(n) S:O(n)


// use DFS
// use BTS specific
// use queue
// use post order
// right middle left

function kthSmallest(root: TreeNode | null, k: number): number {
    let queue = [];
    let cur = root;

    function dfs(cur){
        if(cur == null) return
        let {left, right, val} = cur;
        dfs(right);
        queue.unshift(val);
        dfs(left);

        while(queue.length > k) queue.pop();
    }
    dfs(root)

    return queue.length === k ? queue.pop() : -1
}; // T:O(n) S:O(n)