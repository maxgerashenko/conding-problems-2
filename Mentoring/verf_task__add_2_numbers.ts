/**Medium
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Example:
 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
 Explanation: 342 + 465 = 807.

 **/

/**
 * Definition for singly-linked list.
 *
 * @param {number} value
 */
function ListNode(value = 0) {
  this.val = value;
  this.next = null;
}

/**
 * Adds two numbers
 *
 * @param {ListNode} number1
 * @param {ListNode} number2
 * @return {ListNode}
 */
const addTwoNumbers = function (number1, number2) {
  let sum = new ListNode();
  let remainder = 0;
  let currentNode = sum;

  while (number1 || number2) {
    const left = number1 && number1.val || 0;
    const right = number2 && number2.val || 0;
    const value = left + right + remainder;

    currentNode.val = value % 10;
    remainder = Math.floor(value / 10);

    number1 = number1 && number1.next;
    number2 = number2 && number2.next;

    if (number1 || number2) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
  }

  if (remainder === 1) {
    currentNode.next = new ListNode(remainder);
  }

  return sum;
};
