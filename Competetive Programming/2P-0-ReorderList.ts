// #0
// Reorder List
// https://leetcode.com/problems/reorder-list/

// Naive solution
// Use fast slow

var reorderList = function(head) {
    let nodes = [];
    
    let node = head;
    while(node){
        let {val, next} = node;
        nodes.push(val)
        node = next;
    }
    
    let length = nodes.length;
    let i = 1;
    node = head;
    while(node){
        let {next} = node;
        if(i%2 == 0){
            node.val = nodes[length-i/2];
        } else {
            node.val = nodes[(i-1)/2]
        }
        node = next;
        i++;
    }
    
    return head;
};