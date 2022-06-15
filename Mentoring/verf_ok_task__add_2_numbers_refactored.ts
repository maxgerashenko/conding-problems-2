// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const getNumber = node => {
  let digits = 0;
  let value = 0;
  while (node) {
    value += node.val * Math.pow(10, digits);
    digits++;
    node = node.next;
  }

  return value;
};

const getNode = result => {
  let currentNode = new ListNode();
  let rootNode = currentNode;

  while (result > 0) {
    if (currentNode.val != null) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
    currentNode.val = result % 10;
    result = Math.floor(result / 10);
  }

  return rootNode;
};

/**
 * @param {ListNode} number1
 * @param {ListNode} number2
 * @return {ListNode}
 */
const addTwoNumbers = (number1, number2) => {
  let result = getNumber(number1) + getNumber(number2);

  if (result === 0) {
    return new ListNode(0);
  }

  return getNode(result);
};

// OK, potimized aproach, but doesn't fit leetcode task,
// because can not manupulate 100000000000000000000000 numbers
