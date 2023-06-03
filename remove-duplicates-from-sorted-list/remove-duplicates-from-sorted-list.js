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
    if (!head || !head.next) {
        return head;
    }
    
    let set = new Set();
    let current = head;
    let previous = null;
    
    while (current) {
        if (set.has(current.val)) {
            previous.next = current.next;
        } else {
            set.add(current.val);
            previous = current;
        }
        current = current.next;
    }
    
    return head;
};
