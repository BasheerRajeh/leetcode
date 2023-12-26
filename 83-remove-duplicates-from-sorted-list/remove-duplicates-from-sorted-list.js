/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let slow = head, fast = head

    while(fast) {
        if(fast.val !== slow.val) {
            slow.next = fast
            slow = fast
        }
        if(fast.next === null && fast.val === slow.val) slow.next = null
        fast = fast.next
    }

    return head
};