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
    
    let lenA = length(headA)
    let lenB = length(headB)
    
    while(lenA > lenB){
      lenA--;
      headA = headA.next;
    }
    
    while(lenA < lenB){
      lenB--;
      headB = headB.next;
    }
    while(headA !== headB){
      headA = headA.next;
      headB = headB.next;
    }

    return headA;
};

var length = function (head) {
    let len = 0;
    while (head) {
        len++;
        head = head.next;
    }
    return len;
};
