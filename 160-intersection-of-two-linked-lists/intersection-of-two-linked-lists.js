/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pa = headA, pb = headB

    while(pa !== pb) {
        if(!pa) pa = headB
        else pa = pa.next

        if(!pb) pb = headA
        else pb = pb.next
    }

    return pb
};