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
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    if (length(headA) > length(headB)) {
        return getIntersectionNode(headA.next, headB);
    }
    if (length(headA) < length(headB)) {
        return getIntersectionNode(headA, headB.next);
    }

    if (headA === headB) return headA;
    else return getIntersectionNode(headA.next, headB.next);
};

var length = function (head) {
    let len = 0;
    while (head) {
        len++;
        head = head.next;
    }
    return len;
};
