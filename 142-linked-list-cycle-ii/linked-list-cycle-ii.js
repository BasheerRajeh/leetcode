/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head, slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) 
            break
    }

    if(!fast || !fast.next)
        return null
    
    slow = head
    while(slow !== fast) {
        fast = fast.next
        slow = slow.next
    }

    return slow
};