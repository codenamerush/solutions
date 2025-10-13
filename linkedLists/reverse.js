// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Example input generator
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Utility to print linked list
function printLinkedList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let next = head;
    while (next) {
        let temp = next.next;
        next.next = prev;
        prev = next;
        next = temp;
    }
    return prev;
};

// var reverseList = function(head) {
//     if (!head) {
//         return null;
//     }
//     let newHead = head
//     if (head.next) {
//         newHead = reverseList(head.next);
//         head.next.next = head;
//     }
//     head.next = null
//     return newHead
// };

// --- Example usage ---
const head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
printLinkedList(head);

const reversed = reverseList(head);
console.log("After reverse:");
printLinkedList(reversed);
