class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        // common first
        let tmp = new Node(val);
        this.length++;
        // easy win first
        if(this.head == null) {
            this.head = tmp;
            this.tail = tmp;
            return this;
        }
        this.tail.next = tmp;
        this.tail = tmp
        return this;
    }
}
